import { Box, FormControl, TextField, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { BaseNode } from "../components/BaseNode";
import { useState } from "react";

export const URLNode = ({ id, data }) => {
  const [url, setUrl] = useState(data.url || "");

  function handleUrlChange(event) {
    setUrl(event.target.value);
  }

  const config = {
    header: (
      <>
        <LinkIcon /> <span>URL Loader</span>
      </>
    ),
    content: (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body2">URL</Typography>
        <FormControl fullWidth>
          <TextField
            id={`url-input-${id}`}
            value={url}
            onChange={handleUrlChange}
            size="small"
            placeholder="Enter a URL"
            variant="standard"
          />
        </FormControl>
        <Typography variant="body2" color="textSecondary" fontSize={10}>
          Reads data from the provided URL.
        </Typography>
      </Box>
    ),
    inputs: [{ id: "url", label: "url" }],
    outputs: [{ id: "file", label: "file" }],
    styles: { width: 200, height: 150 },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
