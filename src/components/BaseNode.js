import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CustomHandle from "./customHandle";
import { useStore } from "../store";

export const BaseNode = ({ id, config }) => {
  const { header, content, inputs, outputs, styles } = config;
  const { removeNode } = useStore();
  const [crossClicked, setCrossClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const nodeRef = useRef(null);

  const handleCrossClick = () => {
    if (crossClicked) {
      removeNode(id);
    } else {
      setCrossClicked(true);
      setTimeout(() => setCrossClicked(false), 6000);
    }
  };

  const handleClickInside = (event) => {
    event.stopPropagation(); // Prevent bubbling to the document listener
    setIsActive(true);
  };

  const handleClickOutside = (event) => {
    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      // Remove the event listener on cleanup
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <Card
      ref={nodeRef}
      onClick={handleClickInside}
      style={{
        width: 250,
        padding: "12px",
        border: isActive
          ? "3px solid rgb(100, 80, 200)"
          : "2px solid rgb(211, 195, 246)",
        borderRadius: "8px",
        boxShadow: isActive
          ? "0px 6px 12px rgba(0, 0, 0, 0.3)"
          : "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.2s ease-in-out",
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
