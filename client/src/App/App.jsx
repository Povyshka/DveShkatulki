import './App.scss'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {
  return (
    <div className="background">
      <div className="app">
        <div className="content">
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
