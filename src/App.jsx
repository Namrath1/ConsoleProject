import ConsoleContextProvider from "./components/Context/ContextProvider";
import AnnualReport from "./components/AnnualReport";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ConsoleContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/report" element={<AnnualReport />} />
        </Routes>
      </Router>
    </ConsoleContextProvider>
  );
}

export default App;
