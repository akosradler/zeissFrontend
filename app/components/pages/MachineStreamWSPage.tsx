import { Machine } from "~/model/machine";
import { MachineStreamGrid } from "../MachineStreamGrid";
import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { MachineEvent } from "~/model/machineEvent";

export const MachineStreamWSPage = ({ machines }: { machines: Array<Machine> }) => {
  const [machineStatuses, setMachineStatuses] = useState(
    // @ts-ignore
    machines.reduce((acc, curr) => ((acc[curr.id] = curr.status), acc), {}),
  );

  const socketUrl = "ws://localhost:4000";

  const { lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      const parsedLastMessage = JSON.parse(lastMessage.data);
      setMachineStatuses(prevState => ({ ...prevState, [parsedLastMessage.machine_id]: parsedLastMessage.status }));
    }
  }, [lastMessage]);

  return <MachineStreamGrid machines={machines} machineStatuses={machineStatuses} />;
};
