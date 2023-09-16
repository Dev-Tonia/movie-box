import "./App.css";
import Homepage from "./pages/Homepage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Homepage />} />
      <Route path=":id" element={<MovieDetails />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
