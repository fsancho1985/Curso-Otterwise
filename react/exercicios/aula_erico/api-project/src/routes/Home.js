import { useState, useEffect } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'

import RenderComments from '../Components/RenderComments'

function Home() {
    const [posts, setPosts] = useState()
  

  useEffect(() => {
    async function fetchData() {
      try {
        const {data: response } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        )
        setPosts(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
}, [])

  if (!posts) return <CircularProgress />

  return (
    <div>
      {posts.map(({ id, title, body }) => {
        return (
          <RenderComments key={id} id={id} title={title} body={body}/>
        )
      })}
    </div>
  )
}

export default Home