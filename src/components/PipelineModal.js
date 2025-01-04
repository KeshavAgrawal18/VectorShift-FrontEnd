import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const PipelineModal = ({ data, onClose }) => {
  return (
    <Dialog open={Boolean(data)} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" gap={1}>
          🎉 Pipeline Analysis Complete!
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{ padding: "16px 8px" }}
        >
          <Typography variant="body1">
            <strong>Status:</strong>{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              ✅ Success
            </span>
          </Typography>
          <Typography variant="body1">
            <strong>Number of Nodes:</strong> {data.num_nodes}
          </Typography>
          <Typography variant="body1">
            <strong>Number of Edges:</strong> {data.num_edges}
          </Typography>
          <Typography variant="body1">
            <strong>Is Directed Acyclic Graph (DAG):</strong>{" "}
            {data.isDag ? (
              <Box display="inline-flex" alignItems="center" gap={0.5}>
                <CheckCircleIcon color="success" fontSize="small" />
                Yes
              </Box>
            ) : (
              <Box display="inline-flex" alignItems="center" gap={0.5}>
                <CancelIcon color="error" fontSize="small" />
                No
              </Box>
            )}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          sx={{
            textTransform: "none",
            padding: "8px 16px",
            fontWeight: "bold",
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PipelineModal;
