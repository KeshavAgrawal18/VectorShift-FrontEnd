import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { BaseNode } from "../components/BaseNode";
import { useState } from "react";

export const TextToFileNode = ({ id, data }) => {
  const [selectedFormat, setSelectedFormat] = useState(data.format || "pdf");

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const config = {
    header: (
      <>
        <DownloadIcon /> <span>Text to File</span>
      </>
    ),
    content: (
      <FormControl fullWidth>
        <InputLabel id="file-format-label">File Format</InputLabel>
        <Select
          labelId="file-format-label"
          value={selectedFormat}
          onChange={handleFormatChange}
          variant="standard"
        >
          <MenuItem value="pdf">PDF</MenuItem>
          <MenuItem value="text">TEXT</MenuItem>
          <MenuItem value="docx">DOCX</MenuItem>
        </Select>
      </FormControl>
    ),
    inputs: [{ id: "text", label: "text" }],
    outputs: [{ id: "File", label: "File" }],
    styles: { width: 200, height: 140 },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
