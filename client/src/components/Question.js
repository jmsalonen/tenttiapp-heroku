import { useEffect, useState } from 'react'
import QuestionEdit from './QuestionEdit.js'
import QuestionUser from './QuestionUser.js'
import { useParams } from 'react-router-dom'
import { getProfile } from '../actions/functions.js'

const Question = ({ mytoken, myprofile }) => {
  const [token, setToken] = useState(mytoken)
  const [profile, setProfile] = useState(myprofile)
  const { examid } = useParams()

  useEffect(() => {
    const callProfile = () => {
      const callback = result => {
        setProfile(result)
      }
      getProfile(token, callback)
    }
    if (!token)
      setToken(localStorage.getItem('token'))
    else 
      if (!profile) 
        callProfile()
  }, [token, profile])

  if (!profile)
    return <></>

  return (
    profile.usertype === 'teacher' 
    ? <QuestionEdit mytoken={token} examid={examid} /> 
    : <QuestionUser mytoken={token} examid={examid} userid={profile.id} />
  )
}

export default Question