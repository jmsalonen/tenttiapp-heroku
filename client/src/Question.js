import { useEffect, useState } from 'react'
import axios from 'axios'

import QuestionEdit from './QuestionEdit.js'
import QuestionUser from './QuestionUser.js'
import { useParams } from 'react-router-dom'

let host

if (process.env.NODE_ENV === 'production') 
  host = 'https://tenttiapp.herokuapp.com/'
else
  host = `http://localhost:3001/`

const Question = ({ token, profile }) => {
  const [myToken, setMyToken] = useState(token)
  const [myProfile, setMyProfile] = useState(profile)
//  const [examId, setExamId] = useState(examid)
  const { examid } = useParams()


  const getToken = async () => {
    setMyToken(localStorage.getItem('token'))
  }

  const getProfile = async () => {
    await axios
      .get(`${host}user/profile`, {
        headers: {
          'authorization': `${myToken}`
        }
      })
      .then(response => {
        setMyProfile(response.data)
    })
  }

  useEffect(() => {
    if (!myToken)
      getToken()
    if (!myProfile)
      getProfile()
  }, [myToken, myProfile])
  
  return (
    myProfile.usertype === 'teacher' 
    ? <QuestionEdit token={myToken} profile={myProfile} examid={examid} /> 
    : <QuestionUser token={myToken} profile={myProfile} examid={examid} userid={myProfile.id} />
  )
}

export default Question