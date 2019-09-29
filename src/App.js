import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact'
import Privacy from './components/Pages/Privacy'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import M from 'materialize-css'
import ScrollToTopOfSamePage from './components/helpers/ScrollToTopOfSamePage'
import PostContact from './components/Pages/PostContact'

class App extends Component {
  componentDidMount() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'))

    const pageYOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    if (pageYOffset < 460) {
      document.getElementById('scrollButton').classList.remove('showScrollButton')
      document.getElementById('scrollButton').classList.add('hideScrollButton')
    }
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTopOfSamePage />
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/postContact" component={PostContact} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
