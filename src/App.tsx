import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";
import AboutPage from "./pages/about";
import NewsPage from "./pages/news";
import ASXNavbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
		<ASXNavbar />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/news" element={<NewsPage />} />
			</Routes>
	</BrowserRouter>
  );
}

export default App;
