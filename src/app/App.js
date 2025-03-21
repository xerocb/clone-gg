import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements([
			<Route path="/" element={<HomePage />} />
		])
	);

	return <RouterProvider router={router} />;
}