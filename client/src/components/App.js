import './App.css';
import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import axios from 'axios'
import { getProfile } from '../actions/functions.js'

import Header from './Header.js'
import Exam from './Exam.js'
import LogIn from './LogIn.js'
import Home from './Home.js'
import Register from './Register.js'
import Course from './Course.js'
import Footer from './Footer.js'

import { IntlProvider } from 'react-intl'
import messages_fi from '../translations/fi.json'
import messages_en from '../translations/en.json'



import { HOST } from '../config'

const messages = {
  'fi': messages_fi,
  'en': messages_en
}

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')))
  const [language, setLanguage] = useState('fi')
  const [isLogged, setIsLogged] = useState(false)

  const changeLanguage = () => {
    language === 'en' ? setLanguage('fi') : setLanguage('en')
  }

  const logIn = async (userEmail, userPassword) => {
    const data = {
      email: userEmail,
      password: userPassword
    }
    await axios
      .post(`${HOST}/login`, data)
      .then(response => {
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
      })
      .catch(() => {
        console.error('Log in Error')
      })
  }

  const logOut = async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('profile') // -- 
    setToken(null)
    setProfile(null)
    setIsLogged(false)
  }

  useEffect(() => {
    const callProfile = () => {
      const callback = result => {
        setProfile(result)
      }
      getProfile(token, callback)
    }
    
    if (!token) {
      setToken(localStorage.getItem('token'))
      setIsLogged(false)
    }
    else {
      setIsLogged(true)
      if (!profile) 
        callProfile()
    }
  }, [token, profile])


  return (
    <Router>
      <IntlProvider locale='fi' messages={messages[language]}>
        <Header token={token} logOut={logOut} changeLanguage={changeLanguage} />
        <Switch>
          <Route path="/course/:courseid/exam">
            <Exam mytoken={token} myprofile={profile} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            {isLogged ? <Redirect to='/' /> : <LogIn logIn={logIn} />} 
          </Route>
          <Route path="/courses">
            <Course mytoken={token} myprofile={profile} />
          </Route>
          <Route path="/">
            {isLogged ? <Home /> : <Redirect to='/login' />}
          </Route>
        </Switch>
        <Footer locale={language} />
      </IntlProvider>
    </Router>
  )
}

export default App;
