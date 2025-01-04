import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CustomHandle from "./customHandle";
import { useStore } from "../store";

export const BaseNode = ({ id, config }) => {
  const { header, content, inputs, outputs, styles } = config;
  const { removeNode } = useStore();
  const [crossClicked, setCrossClicked] = useState(false);

  const handleCrossClick = () => {
    if (crossClicked) {
      removeNode(id);
    } else {
      setCrossClicked(true);
    }
  };

  return (
    <Card
      style={{
        width: 250,
        padding: "12px",
        border: "2px solid rgb(211, 195, 246)",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        ...styles,
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px",
          borderRadius: "4px 4px 0 0",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "rgb(100, 130, 160)",
            fontWeight: "bold",
          }}
        >
          <Box
            component="span"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              gap: 4,
            }}
          >
            {header}
          </Box>
        </Box>
        <Typography
          variant="caption"
          style={{
            fontSize: "12px",
            color: crossClicked ? "red" : "#757575", // Change color based on state
            fontStyle: "italic",
            cursor: "pointer",
          }}
          onClick={handleCrossClick}
        >
          <CancelOutlinedIcon />
        </Typography>
      </Box>
      <CardContent>{content}</CardContent>
      {inputs &&
        inputs.map((input, idx) => (
          <CustomHandle
            id={`${id}-${input.id}`}
            idx={idx}
            length={inputs.length}
            type="target"
            label={input.label}
          />
        ))}
      {outputs &&
        outputs.map((output, idx) => (
          <CustomHandle
            id={`${id}-${output.id}`}
            idx={idx}
            length={outputs.length}
            type="source"
            label={output.label}
          />
        ))}
    </Card>
  );
};
