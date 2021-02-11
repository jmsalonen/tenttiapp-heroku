import { useEffect, useState } from 'react'
import { Button, TextField, Card } from '@material-ui/core'
import { Link } from "react-router-dom"
import { getProfile, getCourse, newCourse, deleteCourse } from '../actions/functions.js'
import { FormattedMessage } from 'react-intl'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const CourseEdit = ({ mytoken, myprofile }) => {
  const [token, setToken] = useState(mytoken)
  const [profile, setProfile] = useState(myprofile)
  const [course, setCourse] = useState([])
  const [courseName, setCourseName] = useState('')
  const [refresh, setRefresh] = useState(false)

  const addNewCourse = () => {
    const callback = result => {
      setRefresh(!refresh)
    }
    newCourse(token, profile, courseName, callback)
    setCourseName('')
  }

  const callDeleteCourse = async (courseId) => {
    const callback = result => {
      setRefresh(!refresh)
    }
    deleteCourse(token, courseId, callback)
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
    
    if (!token)
      setToken(localStorage.getItem('token'))
    else {
      if (!profile) 
        callProfile()
      if (profile)
        callCourse()
    }
  }, [token, profile, refresh])

  return (
    <div className="Tenttilista">
      <Card className="kortti">
        <Button component={Link} to='/'> <ArrowBackIcon /> </Button>
        <ul><h3> <FormattedMessage id="course.mycourses" /> </h3></ul>
        {course.map((item, index) => <div key={`coursediv${index}`}>
          <ul>
            <Button 
              onClick={() => callDeleteCourse(item.id)} 
              color="secondary" 
            > × </Button>
            {item.name} 
          </ul>
        </div>)}
        <ul>
          <TextField 
            label={<FormattedMessage id="course.namecourse" />}
            variant={"outlined"} 
            style={ {width: '22em'} } 
            onChange={ (e) => setCourseName(e.target.value) } 
          />
        </ul>
        <ul>
          <Button 
            onClick={addNewCourse} 
            color="primary" 
            variant="contained"
          >
            <FormattedMessage id="course.newcourse" />
        </Button>
        </ul>
      </Card>
    </div>
  )
}

export default CourseEdit
