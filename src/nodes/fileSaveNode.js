import { Box, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { BaseNode } from "../components/BaseNode";

export const FileSaveNode = ({ id, data }) => {
  const config = {
    header: (
      <>
        <SaveIcon /> <span>File Save</span>
      </>
    ),
    content: (
      <Typography
        variant="body2"
        sx={{ textAlign: "center", fontSize: "0.75rem" }} // Smaller text size
      >
        <Box>
          <p style={{ margin: 0 }}>Name the file outputs using "name".</p>
          <p style={{ margin: 0 }}>Will use a default name if empty.</p>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <p style={{ margin: 0 }}>Pass all files to download to "files".</p>
        </Box>
      </Typography>
    ),
    inputs: [
      { id: `name`, label: "name" },
      { id: `file`, label: "file" },
    ],
    styles: { width: 240, height: 140 },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
