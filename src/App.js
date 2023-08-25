import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Home />
    </>
  );
}

export default App;
