import "./App.css";
import { DetailView } from "./components/details/DetailView";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import LoginProvider from "./contexts/LoginProvider";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailView />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
