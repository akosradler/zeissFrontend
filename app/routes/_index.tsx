import { Box, Container, CssBaseline, ThemeProvider, Typography, useTheme } from "@mui/material";
import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MachineStreamGrid } from "~/components/MachineStreamGrid";
import { MachineStreamPage } from "~/components/MachineStreamPage";
import { Machine } from "~/model/machine";
import { BASE_URL } from "~/utils/constants";

export const meta: MetaFunction = () => {
  return [{ title: "Zeiss frontend" }, { name: "description", content: "ZEISS Machine Stream monitor" }];
};

const queryClient = new QueryClient();

export default function Index() {
  const theme = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MachineStreamPage />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
