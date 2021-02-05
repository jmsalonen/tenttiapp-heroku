import axios from 'axios'
import { HOST } from '../config'


export const register = async (userName, userEmail, userPassword, userType) => {
  const data = {
    name: userName,
    email: userEmail,
    password: userPassword,
    usertype: userType
  }
  await axios.post(`${HOST}/register`, data)
}

export const logIn = async (userEmail, userPassword, callback) => {
  const data = {
    email: userEmail,
    password: userPassword
  }
  await axios
    .post(`${HOST}/login`, data)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      callback(true)
    })
    .catch(() => {
      console.error('Log in Error')
      callback(false)
    })
}

export const getProfile = async (token, callback) => {
  if (!token) {
    console.error('functions getProfile - no token')
    return
  }
  await axios
    .get(`${HOST}/user/profile`, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(response => {
      localStorage.setItem('profile', JSON.stringify(response.data)) 
      callback(response.data)
    })
    .catch(() => {
      console.error('getProfile error')
    })
}

// course

export const getCourse = async (token, profile, callback) => {
  const data = {
    id: profile.id
  }
  await axios
    .put(`${HOST}/user/course`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(response => {
      callback(response.data)
    })
}

export const getOtherCourse = async (token, profile, callback) => {
  const data = {
    id: profile.id
  }
  await axios
    .put(`${HOST}/user/student/courses/other`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(response => {
      callback(response.data)
  })
}

export const newCourse = async (token, profile, courseName, callback) => {
  if (courseName.length < 1) 
    return
  const data = {
    id: profile.id,
    name: courseName
  }
  await axios
    .put(`${HOST}/user/teacher/new/course`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      console.error('new course error')
      callback(false)
    })
}

export const deleteCourse = async (token, courseId, callback) => {
  const data = {
    id: courseId
  }
  await axios
    .put(`${HOST}/user/teacher/delete/course`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    })
}

export const joinCourse = async (token, profile, courseId, callback) => {
  const data = {
    userid: profile.id,
    courseid: courseId
  }
  await axios
    .put(`${HOST}/user/student/courses/join`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    })
}

// exam

export const getExam = async (token, profile, courseid, callback) => {
  const data = {
    user: profile.id,
    course: courseid
  }
  await axios
    .put(`${HOST}/user/course/exam`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(response => {
      if (response.data[0].id != null)
        callback(response.data)
    })
}

export const newExam = async (token, profile, courseid, callback) => {
  const data = {
    user: profile.id,
    course: courseid
  }
  await axios
    .put(`${HOST}/user/teacher/new/exam`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    })
}

export const deleteExam = async (token, examId, callback) => {
  const data = {
    id: examId
  }
  await axios
    .put(`${HOST}/user/teacher/delete/exam`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    })
}

export const updateExam = async (token, id, value, callback) => {
  const data = {
    id: id,
    name: value
  }
  await axios
    .put(`${HOST}/user/teacher/update/exam/`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    })
}

// question

export const getQuestion = async (token, examid, callback) => {
  const data = {
    id: examid
  }
  await axios
    .put(`${HOST}/user/teacher/get/question`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(response => {
      callback(response.data)
  })
}

export const newQuestion = async (token, examid, callback) => {
  const data = {
    id: examid
  } 
  await axios
    .put(`${HOST}/user/teacher/add/question/`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    })
}

export const deleteQuestion = async (token, id, callback) => {
  const data = {
    id: id
  }
  await axios
    .put(`${HOST}/user/teacher/delete/question/`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    })
}

export const updateQuestion = async (token, id, value, callback) => {
  const data = {
    id: id,
    name: value
  }
  await axios
    .put(`${HOST}/user/teacher/update/question/`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    })
}

// choice

export const getChoice = async (token, examid, callback) => {
  const data = {
    id: examid
  }
  await axios
    .put(`${HOST}/user/teacher/get/choice`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(response => {
      callback(response.data)
  })
}

export const addChoice = async (token, id, callback) => {
  const data = {
    id: id
  } 
  await axios
    .put(`${HOST}/user/teacher/add/choice/`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    })
}

export const deleteChoice = async (token, id, callback) => {
  const data = {
    id: id
  }
  await axios
    .put(`${HOST}/user/teacher/delete/choice/`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    }) 
}

export const updateChoice = async (token, id, value, callback) => {
  const data = {
    id: id,
    name: value
  }
  await axios
    .put(`${HOST}/user/teacher/update/choice/`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    }) 
}

export const updateCorrect = async (token, id, value, callback) => {
  const data = {
    id: id,
    correct: value
  }
  await axios
    .put(`${HOST}/user/teacher/update/correct/`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    }) 
}

// user

export const getStudentChoice = async (token, userid, examid, callback) => {
  const data = {
    user: userid,
    exam: examid
  }
  await axios
    .put(`${HOST}/user/student/get/choice`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(response => {
      callback(response.data)
    })
}

export const updateAnswer = async (token, examid, userid, id, value, callback) => {
  const data = {
    exam: examid,
    user: userid,
    choice: id,
    value: value
  }
  await axios
    .put(`${HOST}/user/student/update/answer/`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    }) 
}

export const updateFinished = async (token, examid, userid, callback) => {
  const data = {
    exam: examid,
    user: userid
  }
  await axios
    .put(`${HOST}/user/student/finished/`, data, {
      headers: {
        'authorization': `${token}`
      }
    })
    .then(() => {
      callback(true)
    })
    .catch(() => {
      callback(false)
    })
}
