import { Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { DateTime } from "luxon";
import { MachineDetails } from "~/model/machineDetails";
import { MachineStatus } from "~/model/machineStatus";

export const MachineStreamDetails = ({
  machine,
  latestStatus,
}: {
  machine: MachineDetails;
  latestStatus: MachineStatus;
}) => {
  return (
    <Paper elevation={1} sx={{ padding: 2, mb: 4 }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>{machine.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Floor</TableCell>
            <TableCell>{machine.floor}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Install Date</TableCell>
            <TableCell>{DateTime.fromISO(machine.install_date.toString()).toFormat("yyyy LLLL dd HH:ii:ss")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Last Maintenance</TableCell>
            <TableCell>{DateTime.fromISO(machine.install_date).toFormat("yyyy LLLL dd HH:ii:ss")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Latitude</TableCell>
            <TableCell>{machine.latitude}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Longitude</TableCell>
            <TableCell>{machine.longitude}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Machine Type</TableCell>
            <TableCell>{machine.machine_type}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>{latestStatus}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};
