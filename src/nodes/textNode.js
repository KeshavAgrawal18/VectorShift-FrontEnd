import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import { BaseNode } from "../components/BaseNode";
import { useState } from "react";
import EditableDiv from "../components/EditableDiv";

export const TextNode = ({ id, data }) => {
  const [dimensions, setDimensions] = useState({ width: 250, height: 140 }); // Updated initial height to 200
  const [variables, setVariables] = useState([]);
  const handleHeightChange = (newHeight) => {
    setDimensions((prev) => ({ ...prev, height: newHeight + 80 })); // Adding padding
  };

  const config = {
    header: (
      <>
        <TextSnippetOutlinedIcon /> <span>Text Node</span>
      </>
    ),
    content: (
      <>
        <EditableDiv
          onHeightChange={handleHeightChange}
          setVariables={setVariables}
        />
      </>
    ),
    inputs: variables?.map((variable) => ({ id: variable, label: variable })),
    outputs: [{ id: "text-output", label: "output" }],
    styles: { width: dimensions.width, height: dimensions.height },
  };

  return <BaseNode id={id} data={data} config={config} />;
};
