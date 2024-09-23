import { Box, Container, CssBaseline, ThemeProvider, Typography, useTheme } from "@mui/material";
import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MachineStreamGrid } from "~/components/MachineStreamGrid";
import { MachineStreamPage } from "~/components/MachineStreamPage";
import { Machine } from "~/model/machine";
import { BASE_URL } from "~/utils/constants";

export const meta: MetaFunction = () => {
  return [{ title: "ZEISS Machine Stream monitor" }, { name: "description", content: "ZEISS Machine Stream monitor" }];
};

export default function Index() {
  return <MachineStreamPage />;
}
