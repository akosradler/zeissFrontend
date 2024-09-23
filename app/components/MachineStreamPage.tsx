import { Box, Typography, Container, Skeleton } from "@mui/material";
import { MachineStreamGrid } from "./MachineStreamGrid";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "~/utils/constants";
import { Machine } from "~/model/machine";

export const MachineStreamPage = () => {
  const {
    isPending,
    error,
    data: machines,
  } = useQuery<Array<Machine>>({
    queryKey: ["machines"],
    queryFn: () => fetch(`${BASE_URL}/api/v1/machines`).then(res => res.json()),
  });

  if (isPending) return <Skeleton />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container maxWidth="lg">
      <MachineStreamGrid machines={machines} />
    </Container>
  );
};
