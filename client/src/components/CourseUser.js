import { useEffect, useState } from 'react'
import { Button, Card } from '@material-ui/core'
import { Link } from "react-router-dom"
import { 
  getProfile, 
  getCourse, 
  getOtherCourse, 
  joinCourse,
  leaveCourse 
} from '../actions/functions.js'
import { FormattedMessage } from 'react-intl'
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined'
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const CourseUser = ({ mytoken, myprofile }) => {
  const [token, setToken] = useState(mytoken)
  const [profile, setProfile] = useState(myprofile)

  const [course, setCourse] = useState([])
  const [otherCourse, setOtherCourse] = useState([])
  const [refresh, setRefresh] = useState(false)

  const callLeaveCourse = async (courseId) => {
    const callback = result => {
      setRefresh(!refresh)
    }
    leaveCourse(token, profile, courseId, callback)
  }

  const callJoinCourse = async (courseId) => {
    const callback = result => {
      setRefresh(!refresh)
    }
    joinCourse(token, profile, courseId, callback)
  }

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
    const callOtherCourse = () => {
      const callback = result => {
        setOtherCourse(result)
      }
      getOtherCourse(token, profile, callback)
    }
    
    if (!token)
      setToken(localStorage.getItem('token'))
    else {
      if (!profile) 
        callProfile()
      if (profile) {
        callCourse()
        callOtherCourse()
      }
    }
  }, [token, profile, refresh])

  return (
    <div className="Tenttilista">
      <Card className="kortti">
        <Button component={Link} to='/'> <ArrowBackIcon /> </Button>
        <ul><h3> <FormattedMessage id="course.mycourses" /> </h3>
        {course.map((item, index) => 
          <div key={`course${index}`}>
            <Button onClick={() => callLeaveCourse(item.id)}> 
              <KeyboardArrowDownOutlinedIcon color="secondary" />
              {item.name} 
            </Button>
          </div>)}
        </ul>
      </Card>
      <Card className="kortti">
        <ul><h3> <FormattedMessage id="course.othercourses" /> </h3>
        {otherCourse.map((item, index) => 
          <div key={`other${index}`}>
            <Button onClick={() => callJoinCourse(item.id)}> 
              <KeyboardArrowUpOutlinedIcon color="primary" />
              {item.name} 
            </Button>
          </div>)}
        </ul>
      </Card>
    </div>
  )
}

export default CourseUser
