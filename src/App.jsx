import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Routing from "./Routing/Routing";

function AppContent() {
  return (
    <>
      <div className="dark:bg-secondryBlue bg-white min-h-screen">
        <Navbar />
        <Routing />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AppContent />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
