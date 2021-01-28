import { useEffect, useState } from 'react'
import { Button, Card } from '@material-ui/core'
import axios from 'axios'

let host

if (process.env.NODE_ENV === 'production') 
  host = 'https://tenttiapp.herokuapp.com/'
else
  host = `http://localhost:3001/`

const CourseUser = ({ token, profile }) => {
  const [myToken, setMyToken] = useState(token)
  const [myProfile, setMyProfile] = useState(profile)

  const [course, setCourse] = useState([])
  const [otherCourse, setOtherCourse] = useState([])
  const [refresh, setRefresh] = useState(false)

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
        localStorage.setItem('profile', JSON.stringify(response.data))
    })
  }

  const getCourse = async () => {
    const data = {
      id: myProfile.id
    }
    await axios
      .put(`${host}user/course`, data, {
        headers: {
          'authorization': `${myToken}`
        }
      })
      .then(response => {
        setCourse(response.data)
      })
  }

  const getOtherCourse = async () => {
    const data = {
      id: profile.id
    }
    await axios
      .put(`${host}user/student/courses/other`, data, {
        headers: {
          'authorization': `${myToken}`
        }
      })
      .then(response => {
        setOtherCourse(response.data)
    })
  }

  const joinCourse = async (courseId) => {
    const data = {
      userid: profile.id,
      courseid: courseId
    }
    await axios.put(`${host}user/student/courses/join`, data, {
      headers: {
        'authorization': `${myToken}`
      }
    })
    setRefresh(!refresh)
  }

  const leaveCourse = async (courseId) => {
    const data = {
      userid: profile.id,
      courseid: courseId
    }

    await axios.put(`${host}user/student/courses/leave`, data, {
      headers: {
        'authorization': `${myToken}`
      }
    })
    setRefresh(!refresh)
  }

  useEffect(() => {
    if (!myToken)
      getToken()
    if (!myProfile)
      getProfile()
    getCourse()
    getOtherCourse()
  }, [refresh])

  return (
    <div className="Tenttilista">
      <Card className="kortti">
        Minun Kurssini
        {course.map((item, index) => 
          <div key={`course${index}`}>
            <Button onClick={() => leaveCourse(item.id)}> 
              {item.name} 
            </Button>
          </div>)}
      </Card>
      <Card className="kortti">
        Muut Kurssit
        {otherCourse.map((item, index) => 
          <div key={`other${index}`}>
            <Button onClick={() => joinCourse(item.id)}> 
              {item.name} 
            </Button>
          </div>)}
      </Card>
    </div>
  )
}

export default CourseUser
