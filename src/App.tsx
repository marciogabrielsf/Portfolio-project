// components //
import Header from "./components/Header";
// pages //
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  return (
    <div className='App'>
      <Header />

      <main className='Main'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

    </div>
  )
}
export default App
