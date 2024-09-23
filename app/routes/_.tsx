import { Box, CssBaseline, ThemeProvider, Typography, useTheme } from "@mui/material";
import { type MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const meta: MetaFunction = () => {
  return [{ title: "ZEISS Machine Stream monitor" }, { name: "description", content: "ZEISS Machine Stream monitor" }];
};

const queryClient = new QueryClient();

export default function Index() {
  const theme = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            ZEISS Machine Stream monitor
          </Typography>
          <Outlet />
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
