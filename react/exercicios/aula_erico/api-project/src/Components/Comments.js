import { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

function Comments() {
  const [comments, setComments] = useState([])
  
  useEffect(() => {
      const responde = async () => {
        try {
          const { data: resp } = await axios.get(
            'https://jsonplaceholder.typicode.com/comments'
          )
          setComments(resp)
        } catch (error) {
          console.log(error)
        }
      }
      responde()
    }, [])

    return (
        <div>{comments.map(({ postId, id, body }) => {
            return (
              <Fragment key={id}>
                <p>{`PostId: ${postId} - Id: ${id} - Comentário: ${body}`}</p>
              </Fragment>
            )
          })}
        </div>
    )
}

export default Comments