import reactLogo from './assets/react.svg';

// components //
import Header from "./components/Header";

// pages //
import Home from './pages/Home';

function App() {

  return (
    <div className='App'>
      <Header />

      <main className='Main'>
        <Home />
      </main>

    </div>
  )
}
export default App
