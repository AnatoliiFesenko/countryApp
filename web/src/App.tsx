import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/country/:code'
          element={<CountryPage />}
        />
      </Routes>
    </Router>
  );
}
