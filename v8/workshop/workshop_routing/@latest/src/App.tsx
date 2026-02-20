import './App.css'
import {Route, Routes} from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Dashboard from "./pages/DashboardPage";
import HistoryPage from "./pages/HistoryPage";
import SettingsPage from "./pages/SettingsPage";
import TimerPage from "./pages/TimerPage";



export default function App() {

  return (
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </AppLayout>
  );
};


