import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/Index";
import Create from "./routes/Create";
import Edit from "./routes/Edit";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Index />,
        },
        {
            path: "/create",
            element: <Create />,
        },
        {
            path: "/edit/:id",
            element: <Edit />,
        },
    ]);

    return (
        <div className="">
            <Header title="lar-act crud fullstack" />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
