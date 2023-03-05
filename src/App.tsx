import reactLogo from './assets/react.svg';

// components //
import Header from "./components/Header";

// pages //
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {

  return (
    <div className='App'>
      <Header />

      <main className='Main'>
        <Home />
        <About />
        <Projects />
      </main>

    </div>
  )
}
export default App
