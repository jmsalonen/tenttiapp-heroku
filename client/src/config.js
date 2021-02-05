let hostUrl

if (process.env.NODE_ENV === 'production') 
  hostUrl = 'https://tenttiapp.herokuapp.com'
else
  hostUrl = `http://localhost:3001`

export const HOST = hostUrl
