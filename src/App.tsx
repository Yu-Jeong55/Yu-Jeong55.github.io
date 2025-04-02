import MainPage from "pages/main";
import { Routes, Route } from "react-router-dom";
import PrologDetail from "pages/projects/prolog";
import TodayDetail from "pages/projects/today";
import NewstarDetail from "pages/projects/newstar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects/prolog" element={<PrologDetail />} />
      <Route path="/projects/today" element={<TodayDetail />} />
      <Route path="/projects/newstar" element={<NewstarDetail />} />
    </Routes>
  );
}

export default App;
