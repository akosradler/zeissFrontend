import {
  Container,
  Divider,
  Grid2,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { MachineDetails } from "~/model/machineDetails";
import { BASE_URL } from "~/utils/constants";
import { DateTime } from "luxon";

export const MachineStreamDetails = ({ id }: { id: string | undefined }) => {
  const {
    isPending,
    error,
    data: machine,
  } = useQuery<MachineDetails>({
    queryKey: ["machineDetails", id],
    queryFn: () => fetch(`${BASE_URL}/api/v1/machines/${id}`).then(res => res.json()),
  });

  if (isPending) return <Skeleton />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{ mb: 2 }}>
        Details
      </Typography>

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
              <TableCell>
                {DateTime.fromISO(machine.install_date.toString()).toFormat("yyyy LLLL dd HH:ii:ss")}
              </TableCell>
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
              <TableCell>{machine.status}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Events
      </Typography>
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
            {machine.events.map(event => (
              <TableRow>
                <TableCell>{event.status}</TableCell>
                <TableCell>{DateTime.fromISO(event.timestamp).toFormat("yyyy LLLL dd HH:ii:ss")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};
