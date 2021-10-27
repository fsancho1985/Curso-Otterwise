import { useHistory } from "react-router"
import {Button} from '@mui/material'

import '../styles/home.css'
import {Title} from '../styles'
// import List from './List'
import GetPost from "./List"


function Home() {

    const history = useHistory()
    const goForm = () => {
        history.push('/form')
    }    

    return (
        <>
            <Title>Lista de tarefas</Title>
            <GetPost/>
            <div className="container-btn">
                <Button variant="outlined" onClick={goForm}>Adicionar nova Tarefa</Button>
            </div>
        </>
    )
}

export default Home