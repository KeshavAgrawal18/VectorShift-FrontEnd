import { useState } from "react";
import { Handle } from "reactflow";
import { useStore } from "../store";

const CustomHandle = ({ id, idx, length, type = "source", label }) => {
  const isSource = type === "source";
  const topHeight = (idx + 1) * (100 / (length + 1));

  const edges = useStore((state) => state.edges);

  const isConnected = edges.some(
    (edge) => edge.sourceHandle === id || edge.targetHandle === id
  );

  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => setIsActive(false);

  const styles = {
    handle: {
      top: `${topHeight}%`,
      border: `2px solid ${
        isActive
          ? isSource
            ? "#004ba0"
            : "#c2185b"
          : isSource
          ? "#1976d2"
          : "#ff4081"
      }`,
      boxShadow: isActive
        ? `0 0 8px ${isSource ? "#004ba0" : "#c2185b"}`
        : "none",
      width: "10px",
      height: "10px",
      background: "white",
      borderRadius: "50%",
    },
    connectedDot: {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "4px",
      height: "4px",
      background: isSource ? "#1976d2" : "#ff4081",
      borderRadius: "50%",
      display: isConnected ? "block" : "none",
    },
    label: {
      zIndex: 100,
      position: "absolute",
      top: `${topHeight}%`,
      [isSource ? "left" : "right"]: "calc(100% + 8px)",
      fontSize: "12px",
      color: "#333",
      fontWeight: "bold",
      whiteSpace: "nowrap",
    },
  };

  return (
    <>
      <Handle
        key={id}
        type={type}
        position={isSource ? "right" : "left"}
        id={id}
        style={styles.handle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Inner dot */}
        <div style={styles.connectedDot}></div>
      </Handle>
      <span style={styles.label}>{label}</span>
    </>
  );
};

export default CustomHandle;
