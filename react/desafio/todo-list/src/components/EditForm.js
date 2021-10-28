import { useEffect } from "react"

import { useHistory, useParams } from "react-router"
import {useForm} from 'react-hook-form'
import {Box, TextField, Button} from '@mui/material'
import { toast } from "react-toastify"

import '../styles/form.css'
// import client from "../provider/client"
import { Get, Put } from "../services/Services"

function EditForm() {

    const history = useHistory()
    const {id} = useParams()
    const {register, handleSubmit, setValue} = useForm()

    const goHome = () => {
        history.push('/')
      }    

        useEffect(() => {
          const fetchData = async () => {
            try {
              const {data: resp} = await Get()
              const {tasks} = resp
              console.log(tasks)
              const task = tasks.find(task => task.id === id)
              setValue("title", task.title)
              setValue("description", task.description)
            } catch (error) {
              console.log("fudeu!")
            }
          }
          fetchData()
        }, [id, setValue])
        
        const handleEditPost = async (data) => {
          try {
            console.log('Enviou ', data)
            const {data: resp} = await Put(id, data)
            console.log('Resp after Put: ', resp)
            toast.success("Post editado com sucesso!")
            history.push('/')
          } catch (error) {
            console.error(error)
            toast.error("Ops! Algo de inesperado aconteceu! Os campos Título e Descrição devem estar preenchidos")
          }
        }

    return (
      <>
        <h1>Edite sua Task</h1>
            <Box
            onSubmit={handleSubmit(handleEditPost)}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="container-form">
        <div className="label-edit-form">
          <label>Título</label>
        <TextField
        {...register("title")}
        required
        />
        </div>
        <div className="label-edit-form">
          <label>Descrição</label>
        <TextField
        {...register("description")}
        required
        />
        </div>
    <Button variant="outlined" type="submit" >Editar</Button>
      </div>
    </Box>
        <div className="btn-back">  
          <Button variant="outlined" onClick={goHome}>Cancelar</Button>
        </div>
      </>
    )
}

export default EditForm