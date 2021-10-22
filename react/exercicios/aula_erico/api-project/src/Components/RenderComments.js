import { useHistory } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


function RenderComments({ id, title, body }) {

    const history = useHistory() 

    const handleNavigation = (id) => {
        history.push(`/comments/${id}`)
    }

    return (
    <Card sx={{ minWidth: 275, margin: 10 }} key={id}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                {`Post: ${id}`}
              </Typography>
              <Typography variant='h5' component='div'>
                {title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                {body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' variant='outlined'  onClick={() => {
                  handleNavigation(id)}}>Comentários</Button>
            </CardActions>
          </Card>
    )
}

export default RenderComments