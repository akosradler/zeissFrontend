import { MetaFunction } from "@remix-run/react";
import { MachineStreamPage } from "~/components/pages/MachineStreamPage";

export const meta: MetaFunction = () => {
  return [{ title: "ZEISS Machine Stream monitor" }, { name: "description", content: "ZEISS Machine Stream monitor" }];
};

export default function Index() {
  return <MachineStreamPage />;
}
