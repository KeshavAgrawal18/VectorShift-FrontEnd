import { Button } from "@mui/material";
import { useState } from "react";
import { useStore } from "./store";
import PipelineModal from "./components/PipelineModal";

const API_URL = "http://localhost:8000/pipelines/parse";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const { data } = result;

      // Set modal data and open the modal
      setModalData(data);
      setModalOpen(true);
    } catch (error) {
      console.error("Error posting data to backend:", error);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-20px",
      }}
    >
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          padding: "8px 12px",
          fontSize: "12px",
          fontWeight: "bold",
          borderRadius: "8px",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#1976d2",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          },
        }}
        onClick={handleClick}
      >
        Submit
      </Button>

      {/* Modal Component */}
      {isModalOpen && (
        <PipelineModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)} // Close modal function
          data={modalData} // Pass response data to modal
        />
      )}
    </div>
  );
};
