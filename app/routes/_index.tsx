import { Typography } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Zeiss frontend" }, { name: "description", content: "Welcome to the Zeiss project!" }];
};

export default function Index() {
  return <Typography variant="h1">Welcome to the Zeiss project</Typography>;
}
