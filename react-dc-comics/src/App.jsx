import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import logo Header 
import headerLogo from './assets/img/dc-logo.png'

//Importa Header

import Header from './components/Header'

//Importa Main

import Main from './components/Main'

//Importa Footer

import Footer from './components/Footer'

function App() {

  return (
    <>

      <header>

        <div className='Header-centrato'>

          <img src={headerLogo} alt="logo header" />

          <nav>
            <a href=''>CHARACTERS</a>
            <a href=''>COMICS</a>
            <a href=''>MOVIES</a>
            <a href=''>TV</a>
            <a href=''>GAMES</a>
            <a href=''>COLLECTIBLES</a>
            <a href=''>VIDEOS</a>
            <a href=''>FANS</a>
            <a href=''>NEWS</a>
            <a href=''>SHOP</a>
          </nav>

        </div>

      </header>

      <main></main>
      <footer></footer>

    </>
  )
}

export default App
