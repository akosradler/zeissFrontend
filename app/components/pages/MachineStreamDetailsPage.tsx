import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { MachineDetails } from "~/model/machineDetails";
import { BASE_URL } from "~/utils/constants";
import { MachineStreamDetailsWSPage } from "./MachineStreamDetailsWSPage";

export const MachineStreamDetailsPage = ({ id }: { id: string | undefined }) => {
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

  return <MachineStreamDetailsWSPage machine={machine} />;
};
