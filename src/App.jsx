import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { DarkModeProvider } from './action/DarkModeContext';

function App() {
  return (
  <>
      <DarkModeProvider>
        <Navbar />
        <Home />
        <Footer />
      </DarkModeProvider>
  </>
  );
}

export default App;
