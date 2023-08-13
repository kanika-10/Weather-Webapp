import HomePage from "./Components/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Auth/privateRoute";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/privateRoute"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<Navigate replace to="homepage" />} />
      </Routes>
    </div>
  );
}

export default App;
