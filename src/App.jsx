import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import AppRouter from "./Routes/router";

function App() {
  return (
    <>
      <NextUIProvider>
        <Router>
          <NavBar />
          <AppRouter />
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
