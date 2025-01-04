import { Box, FormControl, Button, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { BaseNode } from "../components/BaseNode";
import { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

export const FileUploadNode = ({ id, data }) => {
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFileName(file ? file.name : "");
  };

  const config = {
    header: (
      <>
        <UploadFileIcon /> <span>File </span>
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
          <Button component="label" size="small">
            <FileUploadOutlinedIcon />
            <span style={{ font: "bold" }}> Upload File</span>
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
        </FormControl>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: selectedFileName ? "text.primary" : "text.secondary",
          }}
        >
          {selectedFileName || "No file selected"}
        </Typography>
      </Box>
    ),
    outputs: [{ id: `file`, label: "file" }],
    styles: { width: 200, height: 160 },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
