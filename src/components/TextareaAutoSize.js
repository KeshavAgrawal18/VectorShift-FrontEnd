import React, { useRef, useState } from "react";

const TextareaAutosize = ({ onHeightChange, setVariables }) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    adjustHeight();
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${newHeight}px`;
      if (onHeightChange) onHeightChange(newHeight);
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      style={{
        width: "180px",
        resize: "none",
        overflow: "hidden",
        padding: "6px 8px",
        fontSize: "14px",
        lineHeight: "1.5",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        outline: "none",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      rows={1}
      placeholder="Start typing here..."
      onFocus={(e) => {
        e.target.style.borderColor = "#007BFF";
        e.target.style.boxShadow = "0 4px 8px rgba(0, 123, 255, 0.2)";
      }}
      onBlur={(e) => {
        e.target.style.borderColor = "#ccc";
        e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      }}
    />
  );
};

export default TextareaAutosize;
