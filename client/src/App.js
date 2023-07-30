import "./App.css";
import Cart from "./components/Cart/Cart";
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
          <Route path= '/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
