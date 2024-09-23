import { type MetaFunction } from "@remix-run/node";

import { MachineStreamDetailsPage } from "~/components/pages/MachineStreamDetailsPage";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "ZEISS Machine Stream details" }, { name: "description", content: "ZEISS Machine Stream details" }];
};

export default function MachineStreamDetailsIndex() {
  const params = useParams();

  return <MachineStreamDetailsPage id={params["id"]} />;
}
