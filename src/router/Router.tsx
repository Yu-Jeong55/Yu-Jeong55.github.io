import MainPage from "pages/main";
import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/Yu-Jeong55.github.io/" element={<MainPage />} />
    </Routes>
  );
}
