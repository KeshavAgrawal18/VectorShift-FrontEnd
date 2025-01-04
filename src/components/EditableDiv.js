import React, { useRef, useEffect, useState } from "react";
import { styles } from "../styles/editableDiv";

const EditableDiv = ({ onHeightChange, setVariables }) => {
  const [rawText, setRawText] = useState("");
  const [error, setError] = useState("");
  const divRef = useRef(null);

  const setStyle = (element, styles) => Object.assign(element.style, styles);

  const isValidVariableName = (name) => /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);

  const parseContent = (text) => {
    const regex = /{{(.*?)}}/g;
    const segments = [];
    let lastIndex = 0;

    text.replace(regex, (match, code, offset) => {
      if (lastIndex < offset) {
        segments.push({ type: "text", value: text.slice(lastIndex, offset) });
      }
      segments.push({ type: "code", value: code.trim() });
      lastIndex = offset + match.length;
    });

    if (lastIndex < text.length) {
      segments.push({ type: "text", value: text.slice(lastIndex) });
    }

    return segments;
  };

  const adjustHeight = () => {
    if (divRef.current) {
      setStyle(divRef.current, { height: "auto" });
      const newHeight = divRef.current.scrollHeight;
      setStyle(divRef.current, { height: `${newHeight}px` });
      onHeightChange?.(newHeight + (error ? 30 : 0));
    }
  };

  const renderContent = () => {
    const segments = parseContent(rawText);
    const codeValues = segments
      .filter((segment) => segment.type === "code")
      .map((segment) => segment.value);

    const validVariables = codeValues.filter(isValidVariableName);
    const invalidVariables = codeValues.filter(
      (code) => !isValidVariableName(code)
    );

    setError(
      invalidVariables.length > 0
        ? `Invalid variable(s): ${invalidVariables.join(", ")}`
        : ""
    );

    setVariables?.(validVariables);

    const parsedHTML = segments
      .map((segment) =>
        segment.type === "code"
          ? `<span style="${convertStyleToString(
              isValidVariableName(segment.value)
                ? styles.code.valid
                : styles.code.invalid
            )}">{{${segment.value}}}</span>`
          : segment.value
      )
      .join("");

    if (divRef.current && divRef.current.innerHTML !== parsedHTML) {
      divRef.current.innerHTML = parsedHTML;
      placeCaretAtEnd(divRef.current);
    }
  };

  const convertStyleToString = (styleObject) =>
    Object.entries(styleObject)
      .map(
        ([key, value]) =>
          `${key.replace(
            /[A-Z]/g,
            (match) => `-${match.toLowerCase()}`
          )}:${value}`
      )
      .join(";");

  const placeCaretAtEnd = (element) => {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const handleInput = () => {
    setRawText(divRef.current?.innerText || "");
    adjustHeight();
  };

  const handleFocusBlur = (focused) => (e) => {
    setStyle(
      e.target,
      focused
        ? styles.editableDivFocus
        : { borderColor: "#d1d5db", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)" }
    );
  };

  useEffect(() => {
    renderContent();
  }, [rawText]);

  useEffect(() => {
    adjustHeight();
  }, [error]);

  return (
    <>
      <div
        ref={divRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onFocus={handleFocusBlur(true)}
        onBlur={handleFocusBlur(false)}
        style={styles.editableDiv}
        placeholder="Start typing here..."
      />
      {error && <div style={styles.error}>{error}</div>}
    </>
  );
};

export default EditableDiv;
