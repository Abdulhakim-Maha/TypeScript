import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Add from "./components/Add";
import type { PaletteMode } from "@mui/material";

function App(): JSX.Element {
  const [mode, setMode] = useState<PaletteMode>("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
