import { useEffect, useState } from 'react'
import CourseEdit from './CourseEdit.js'
import CourseUser from './CourseUser.js'
import { getProfile } from '../actions/functions.js'

const Course = ({ mytoken, myprofile }) => {
  const [token, setToken] = useState(mytoken)
  const [profile, setProfile] = useState(myprofile)

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
    ? <CourseEdit mytoken={token} myprofile={profile} /> 
    : <CourseUser mytoken={token} myprofile={profile} />
  )
}

export default Course
