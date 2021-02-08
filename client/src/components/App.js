import './App.css';
import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
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
import { getProfile, logIn } from '../actions/functions.js'

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

  const callLogIn = async (userEmail, userPassword) => {
    const callback = result => {
      setToken(result)
    }
    logIn(userEmail, userPassword, callback)
  }

  const logOut = async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
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
            {isLogged ? <Redirect to='/' /> : <LogIn logIn={callLogIn} />} 
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
