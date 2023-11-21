import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export * from "./theme";

interface BuilderhubThemeProviderProps {
  children: React.ReactNode;
}

export function BuilderhubThemeProvider(props: BuilderhubThemeProviderProps) {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
