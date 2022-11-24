import { RouterProvider } from "react-router";
import { router } from "./routers/router";
import Layout from "./ui/Layout";

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </div>
  );
}

export default App;
