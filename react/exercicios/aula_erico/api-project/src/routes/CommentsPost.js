import { useState, useEffect, Fragment } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function CommentsPost() {
    const [commentsPost, setCommentsPost] = useState([])

    const {id} = useParams()

    const history = useHistory()
    
    useEffect(() => {
        const response = async () => {
          try {
            const { data: resp } = await axios.get(
              `https://jsonplaceholder.typicode.com/comments?postId=${id}`
            )
            setCommentsPost(resp)
          } catch (error) {
            console.log(error)
          }
        }
        response()
      }, [id])

      const handleGoBack = () => {
          history.push('/')
      }

      return (
        <div>{commentsPost.map(({ postId, id, body }) => {
              return (
                <Fragment key={id}>
                    <Card sx={{ minWidth: 275, margin: 10 }} key={id}>
                    <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color='text.secondary'
                        gutterBottom
                    >
                        {`Post: ${postId}`}
                    </Typography>
                    <Typography variant='p' component='div'>
                        {`Comentário: ${id}`}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: 25 }} color='text.secondary' >
                        {body}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size='small' variant='outlined' color='error' onClick={handleGoBack}>Voltar</Button>
                    </CardActions>
                </Card>
            </Fragment>
              )
            })}
        </div>
      )
}

export default CommentsPost