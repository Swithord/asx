import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";
import AboutPage from "./pages/about";
import EventsPage from "./pages/events";
import ASXNavbar from "./components/navbar";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
	<>
		<BrowserRouter>
			<ASXNavbar />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/events" element={<EventsPage />} />
				</Routes>
			<Footer />
		</BrowserRouter>
		<Analytics />
	</>
  );
}

export default App;
