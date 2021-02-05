import { useEffect, useState } from 'react'
import { Button, TextField, Card } from '@material-ui/core'
import { getProfile, getCourse, newCourse, deleteCourse } from '../actions/functions.js'
import { FormattedMessage } from 'react-intl'

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
        {course.map((item, index) => <div key={`coursediv${index}`}>
          <Button> 
            {item.name} 
          </Button>
          <Button 
            onClick={() => callDeleteCourse(item.id)} 
            color="secondary" 
          > × </Button>
        </div>)}
        <div>
        <TextField 
          label={<FormattedMessage id="course.namecourse" />}
          style={ {width: '50%'} } 
          onChange={ (e) => setCourseName(e.target.value) } 
        />
        </div>
        <Button 
          onClick={addNewCourse} 
          color="primary" 
        >
          <FormattedMessage id="course.newcourse" />
        </Button>
      </Card>
    </div>
  )
}

export default CourseEdit
