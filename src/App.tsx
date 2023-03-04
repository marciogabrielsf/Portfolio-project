import reactLogo from './assets/react.svg';

// components //
import Header from "./components/Header";

// pages //
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <div className='App'>
      <Header />

      <main className='Main'>
        <Home />
        <About />
      </main>

    </div>
  )
}
export default App
