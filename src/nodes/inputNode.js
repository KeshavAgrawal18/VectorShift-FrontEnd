import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import InputIcon from "@mui/icons-material/Input";
import { BaseNode } from "../components/BaseNode";
import { useState } from "react";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  const config = {
    header: (
      <>
        <InputIcon /> <span>Input</span>
      </>
    ),
    content: (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          maxWidth: 300,
          margin: "0 auto",
        }}
      >
        <FormControl fullWidth>
          <TextField
            label="Name"
            value={currName}
            onChange={handleNameChange}
            size="small"
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            value={inputType}
            onChange={handleTypeChange}
            size="small"
          >
            <MenuItem value="Text">Text</MenuItem>
            <MenuItem value="File">File</MenuItem>
          </Select>
        </FormControl>
      </Box>
    ),
    outputs: [{ id: "value", label: currName }],
    styles: { width: 200, height: 160 },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
