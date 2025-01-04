import { TextField } from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import { BaseNode } from "../components/BaseNode";
import { useState } from "react";

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || "");

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const config = {
    header: (
      <>
        <NotesIcon /> <span>Note</span>
      </>
    ),
    content: (
      <TextField
        value={note}
        onChange={handleNoteChange}
        placeholder="Write your node..."
        multiline
        rows={4}
        size="small"
      />
    ),
    styles: { width: 200, height: 180 },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
