import { useState } from "react";
import { Handle } from "reactflow";
import { useStore } from "../store";
import { styles as generateHandleStyles } from "../styles/customHandle";

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

  const styles = generateHandleStyles({
    isActive,
    topHeight,
    isConnected,
    isSource,
  });

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
