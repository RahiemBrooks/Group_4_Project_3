import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<MainLayout>
				<App />
				{/* <ToastContainer /> */}
			</MainLayout>
		</BrowserRouter>
	</React.StrictMode>
);