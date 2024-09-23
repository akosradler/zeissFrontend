import { Paper, Table, TableHead, TableRow, TableCell, Typography, TableBody } from "@mui/material";
import { DateTime } from "luxon";
import { MachineEvent } from "~/model/machineEvent";

export const MachineStreamDetailsEvents = ({ machineEvents }: { machineEvents: Array<MachineEvent> }) => {
  return (
    <Paper elevation={1} sx={{ padding: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>Status</Typography>
            </TableCell>
            <TableCell>
              <Typography>Date</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {machineEvents.map(event => (
            <TableRow key={event.id}>
              <TableCell>{event.status}</TableCell>
              <TableCell>{DateTime.fromISO(event.timestamp).toFormat("yyyy LLLL dd HH:ii:ss")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
