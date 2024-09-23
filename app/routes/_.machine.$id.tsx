import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MachineStreamDetails } from "~/components/MachineStreamDetails";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "ZEISS Machine Stream details" }, { name: "description", content: "ZEISS Machine Stream details" }];
};

export default function MachineStreamDetailsPage() {
  const params = useParams();

  return <MachineStreamDetails id={params["id"]} />;
}
