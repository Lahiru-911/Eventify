import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import AppRouter from "./Routes/router";
import Footer from "./Components/Footer/Footer";
import AddEventForm from "./Components/AddEventForm";

function App() {
  return (
    <>
      <NextUIProvider>
        <Router>
          <NavBar />
          <AppRouter />
          <Footer />
          {/* <AddEventForm/> */}
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
