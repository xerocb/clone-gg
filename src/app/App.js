import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import MainPage from "../components/MainPage/MainPage";

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements([
			<Route path="/" element={<HomePage />} />,
			<Route path="/player/:username" element={<MainPage />} />
		])
	);

	return <RouterProvider router={router} />;
}