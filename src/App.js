import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { router } from "./routers/router";
import GlobalLoader from "./ui/GlobalLoader";
import Layout from "./ui/Layout";
import { setAuth } from "./utils/setAuth";

const queryClient = new QueryClient();

function App() {
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setAuth(user);
      setIsLoading(false);
    });
  }, [auth]);

  return isLoading ? (
    <GlobalLoader root={true} />
  ) : (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
