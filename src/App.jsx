import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import AppRouter from "./Routes/router";
import "./App.css";

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
