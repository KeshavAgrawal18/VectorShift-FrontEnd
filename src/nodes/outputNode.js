import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import OutputIcon from "@mui/icons-material/Output";
import { BaseNode } from "../components/BaseNode";
import { useState } from "react";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  const config = {
    header: (
      <>
        <OutputIcon /> <span>Output</span>
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
            value={outputType}
            onChange={handleTypeChange}
            size="small"
          >
            <MenuItem value="Text">Text</MenuItem>
            <MenuItem value="Image">Image</MenuItem>
          </Select>
        </FormControl>
      </Box>
    ),

    inputs: [{ id: "value", label: currName }],
    styles: { width: 200, height: 160 },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
