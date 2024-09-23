import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { MachineDetails } from "~/model/machineDetails";
import { MachineStreamDetailsEvents } from "../MachineStreamDetailsEvents";
import { MachineStreamDetails } from "../MachineStreamDetails";

export const MachineStreamDetailsWSPage = ({ machine }: { machine: MachineDetails }) => {
  const [liveEvents, setLiveEvents] = useState(machine.events);
  const [latestStatus, setLatestStatus] = useState(machine.status);

  const socketUrl = "ws://localhost:4000";

  const { lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      const parsedLastMessage = JSON.parse(lastMessage.data);
      if (parsedLastMessage.machine_id === machine.id) {
        setLiveEvents(prev => [JSON.parse(lastMessage.data), ...prev]);
        setLatestStatus(lastMessage.data.status);
      }
    }
  }, [lastMessage]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{ mb: 2 }}>
        Details
      </Typography>
      <MachineStreamDetails machine={machine} latestStatus={latestStatus} />

      <Typography variant="h5" sx={{ mb: 2 }}>
        Events
      </Typography>
      <MachineStreamDetailsEvents machineEvents={liveEvents} />
    </Container>
  );
};
