import { useState } from "react";
import { Button } from "./components/ui/button";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount((prev) => prev + 1)}>Click Me</Button>
    </>
  );
};

export default App;
