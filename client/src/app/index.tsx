import { ROUTES } from "@/constants";
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { ToastProvider } from "./contexts/ToastProvider";
import RootLayout from "./layouts/RootLayout";
import { routes } from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
      <Route path="/" element={<Navigate to={ROUTES.PRACTICE} />} />
    </Route>
  )
);

const App = () => {
  return (
    <AppProvider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </AppProvider>
  );
};

export default App;
