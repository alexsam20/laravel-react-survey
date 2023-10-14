import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: '/app',
    element: <App />
  }
])

export default router
