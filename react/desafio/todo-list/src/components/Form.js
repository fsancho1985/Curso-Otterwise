import { useHistory } from "react-router"
import {useForm} from 'react-hook-form'
import {Box, TextField, Button} from '@mui/material'

import '../styles/form.css'
import { Post } from "../services/Services"

function Form() {

    const history = useHistory()
    const goHome = () => {
        history.push('/')
      }    

    const {register, handleSubmit} = useForm()

      const onSubmit = async data => {
        try {
          const {data: resp} = await Post(data)
          alert('Criado!')
          history.push('/')          
      } catch (error) {
        console.error(error)
      }
    }



    return (
      <>
        <h1>Adicione sua Nova Task</h1>
            <Box
            onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="container-form">
        <TextField
        {...register("title")}
        id="outlined-required"
        label="Título da Task"
        required
        />
        <TextField
        {...register("description")}
        id="outlined-required"
        label="Descrição da Task"
        required
        />
    <Button variant="outlined" type="submit">Adicionar</Button>
      </div>
    </Box>
        <div className="btn-back">  
          <Button variant="outlined" onClick={goHome}>Retornar</Button>
        </div>
      </>
    )
}

export default Form