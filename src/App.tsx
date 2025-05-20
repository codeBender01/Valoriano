import { useState } from "react";
import Router from "./router";
import SplashScreen from "./pages/SplashScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return isLoading ? (
    <SplashScreen onFinish={() => setIsLoading(false)} />
  ) : (
    <>
      <Router />
    </>
  );
}

export default App;
