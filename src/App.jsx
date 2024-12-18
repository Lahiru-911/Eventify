import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import AppRouter from "./Routes/router";
import Ths from "./Components/NavBar/ths";
import EventGrid from "./Components/EventGrid";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NextUIProvider>
        <Router>
          <NavBar />  
          <AppRouter />
          {/* <Ths/> */}
          {/* <EventGrid/> */}
          <Footer/>
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
