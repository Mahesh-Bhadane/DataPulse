import { Suspense } from "react";
import "./App.css";
import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={routes} fallbackElement={<h1>Loading...</h1>} />
    </Suspense>
  );
}

export default App;
