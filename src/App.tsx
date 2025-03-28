import { useRef } from "react";
import MainPage from "pages/main";
import Navigation from "components/navigation";

function App() {
  const scrollRef = useRef<HTMLElement[]>([]);

  return (
    <>
      <MainPage ref={scrollRef} />
    </>
  );
}

export default App;
