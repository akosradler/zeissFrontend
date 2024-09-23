import { Divider, Grid2, IconButton, Paper } from "@mui/material";
import React from "react";
import { Machine } from "~/model/machine";
import { IconDirectionSignFilled } from "@tabler/icons-react";
import { useNavigate } from "@remix-run/react";

export const MachineStreamGrid = ({ machines }: { machines: Array<Machine> }) => {
  const navigate = useNavigate();
  return (
    <Grid2 container spacing={2} justifyContent={"center"}>
      {machines.map(machine => (
        <Grid2 size={{ xs: 8, md: 6 }} key={machine.id}>
          <Paper elevation={1} sx={{ padding: 2 }}>
            <Grid2 container spacing={1}>
              <Grid2 size={6}>ID</Grid2>
              <Grid2 size={6}>{machine.id}</Grid2>
              <Grid2 size={12}>
                <Divider />
              </Grid2>
              <Grid2 size={6}>Machine Type</Grid2>
              <Grid2 size={6}>{machine.machine_type}</Grid2>
              <Grid2 size={12}>
                <Divider />
              </Grid2>
              <Grid2 size={6}>Floor</Grid2>
              <Grid2 size={6}>{machine.floor}</Grid2>
              <Grid2 size={12}>
                <Divider />
              </Grid2>
              <Grid2 size={6}>Status</Grid2>
              <Grid2 size={6}>{machine.status}</Grid2>
              <Grid2 size={12}>
                <Divider />
              </Grid2>
              <Grid2 size={6}>Details</Grid2>
              <Grid2 size={6}>
                <IconButton aria-label="Details" onClick={() => navigate(`/machine/${machine.id}`)}>
                  <IconDirectionSignFilled />
                </IconButton>
              </Grid2>
            </Grid2>
          </Paper>
        </Grid2>
      ))}
    </Grid2>
  );
};
