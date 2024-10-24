import { useEffect, useState } from 'react'
import './App.scss'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Overlay from './Components/Overlay/Overlay'

function App() {
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false)
    }, 5500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Overlay isVisible={showOverlay} />
      <div className="background">
        <div className="app">
          <div className="content">
            <Header />
            <Main />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
