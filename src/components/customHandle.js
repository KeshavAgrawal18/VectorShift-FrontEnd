import { Handle } from "reactflow";

const CustomHandle = ({ id, idx, length, type = "source", label }) => {
  const isSource = type === "source";
  const topHeight = (idx + 1) * (100 / (length + 1));

  const styles = {
    handle: {
      top: `${topHeight}%`,
      border: `1px solid ${isSource ? "#1976d2" : "#ff4081"}`,
      width: "8px",
      height: "8px",
      background: "white",
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
      />
      <span style={styles.label}>{label}</span>
    </>
  );
};

export default CustomHandle;
