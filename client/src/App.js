
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import LoginProvider from './contexts/LoginProvider';


function App() {
  return (
    <LoginProvider >
      <Header/>
      <Home/>
    </LoginProvider>
  );
}

export default App;
