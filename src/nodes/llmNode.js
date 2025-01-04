import { Box } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { BaseNode } from "../components/BaseNode";

export const LLMNode = ({ id, data }) => {
  const config = {
    header: (
      <>
        <AutoAwesomeIcon /> <span>LLM</span>
      </>
    ),
    content: (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: "0.9rem",
          textAlign: "center",
          color: "rgba(0, 0, 0, 0.7)",
        }}
      >
        This is an LLM node.
      </Box>
    ),
    inputs: [
      { id: `system-${id}`, label: "system" },
      { id: `prompt-${id}`, label: "prompt" },
    ],
    outputs: [{ id: "response", label: "response" }],
    styles: { width: 200, height: 120 },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
