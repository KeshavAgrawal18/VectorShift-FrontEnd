export const styles = ({ isActive, isConnected, isSource, topHeight }) => ({
  handle: {
    top: `${topHeight}%`,
    border: `1.5px solid rgb(66, 40, 199)`,
    boxShadow: isActive ? `0 0 8px rgb(100, 80, 200)` : "none",
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
    background: "rgb(163, 147, 248)",
    border: "2px solid rgb(139, 120, 238)",
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
});
