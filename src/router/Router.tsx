import MainPage from "pages/main";
import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
