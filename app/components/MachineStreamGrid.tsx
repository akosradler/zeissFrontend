import { Divider, Grid2, Paper } from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { Machine } from "~/model/machine";

export const MachineStreamGrid = ({ machines }: { machines: Array<Machine> }) => {
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
            </Grid2>
          </Paper>
        </Grid2>
      ))}
    </Grid2>
  );
};
