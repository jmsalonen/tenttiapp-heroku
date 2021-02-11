import { useEffect, useState } from 'react'
import { Button, Card } from '@material-ui/core'
import { Link } from "react-router-dom";
import { getProfile, getCourse } from '../actions/functions.js'

const Home = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')))
  const [course, setCourse] = useState([]) 
  
  useEffect(() => {
    const callProfile = () => {
      const callback = result => {
        setProfile(result)
      }
      getProfile(token, callback)
    }
    const callCourse = () => {
      const callback = result => {
        setCourse(result)
      }
      getCourse(token, profile, callback)
    }
    
    if (!token)
      setToken(localStorage.getItem('token'))
    else {
      if (!profile) 
        callProfile()
      if (profile)
        callCourse()
    }
  }, [token, profile])

  if (!profile)
    return <></>
  return (
    <div className="Tenttilista">
      <Card className="kortti">
        <ul>
          <div>
            {profile.name} | {profile.email} | {profile.usertype} 
          </div>
          <div>
            {course.map((item, index) => 
              <div key={`homebutton${index}`}>
                <Button component={Link} to={`course/${item.id}/exam`} > 
                  {item.name} 
                </Button>
              </div>
            )}
          </div>
        </ul>
      </Card>
    </div>
  )
}

export default Home
