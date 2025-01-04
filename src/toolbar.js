import { DraggableNode } from "./draggableNode";

import InputIcon from "@mui/icons-material/Input";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import OutputIcon from "@mui/icons-material/Output";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SaveIcon from "@mui/icons-material/Save";
import NoteIcon from "@mui/icons-material/Note";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkIcon from "@mui/icons-material/Link";

const nodeStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  justifyContent: "center",
  flexDirection: "column",
  width: "80px",
  height: "80px",
  background: "white",
  border: "1pt solid rgba(126, 126, 126, 0.2)",
  borderRadius: "8px",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  fontSize: "0.85rem",
  fontWeight: "bold",
  color: "rgba(100, 100, 100, 100)",
  cursor: "pointer",
};

const ToolbarItem = ({ type, icon: Icon, label }) => {
  return (
    <DraggableNode
      type={type}
      label={
        <div style={nodeStyle}>
          <Icon style={{ fontSize: "24px" }} />
          {label}
        </div>
      }
    />
  );
};

export const PipelineToolbar = () => {
  const toolbarItems = [
    { type: "customInput", icon: InputIcon, label: "Input" },
    { type: "llm", icon: AutoAwesomeIcon, label: "LLM" },
    { type: "customOutput", icon: OutputIcon, label: "Output" },
    { type: "text", icon: TextFormatIcon, label: "Text" },
    { type: "fileUpload", icon: UploadFileIcon, label: "File" },
    { type: "fileSave", icon: SaveIcon, label: "File Save" },
    { type: "note", icon: NoteIcon, label: "Note" },
    { type: "textToFile", icon: DescriptionIcon, label: "Text to File" },
    { type: "url", icon: LinkIcon, label: "URL" },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          margin: "20px 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {toolbarItems.map(({ type, icon, label }) => (
          <ToolbarItem key={type} type={type} icon={icon} label={label} />
        ))}
      </div>
    </div>
  );
};
