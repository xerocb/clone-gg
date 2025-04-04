import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import MainPage from "../components/MainPage/MainPage";
import LoginPage from "../components/LoginPage/LoginPage";

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements([
			<Route path="/" element={<HomePage />} />,
			<Route path="/player/:username" element={<MainPage />} />,
			<Route path="/signup" element={<LoginPage type="signup" />} />,
			<Route path="/login" element={<LoginPage type="login" />} />
		])
	);

	return <RouterProvider router={router} />;
}