import "./App.css";
import SideBar from "./components/sidebar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <SideBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
