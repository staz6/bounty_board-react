import logo from "./logo.svg";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

///Theme provider for color codes and border
function getThemeType() {
  return createTheme({
    primary: {
      text: "#fff",
      bg: "rgb(90 72 96/1)",
      grey: "rgb(196, 196, 196)",
      blue: "rgb(95, 113, 212)",
      purple: "rgb(165, 22, 185)",
      green: "rgb(6, 219, 172)",
    },
    border: {
      color: "rgb(74 74 74/1)",
      main: "1px solid rgb(74 74 74/1)",
    },
  });
}

function App() {
  return (
    <ThemeProvider theme={getThemeType()}>
      <MainLayout>
        <Home></Home>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
