// import {Button} from '@mui/material'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
// import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@mui/icons-material/Delete'
// import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit';

import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
// import { useParams } from 'react-router'
// import { useForm } from 'react-hook-form'

import {Delete, Get} from '../services/Services'

import '../styles/list.css'
import { toast } from "react-toastify"

// import Tasks from './Tasks'

function GetPost() {
  const [post, setPost] = useState()

  const history = useHistory()

    const editForm = (id) => {
        history.push(`/editform/${id}`)
      } 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: resp} = await Get()
        const {tasks} = resp
        setPost(tasks)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  if (!post) return null

  const deletePost = async (id) => {
    try {
      const {data: resp} = await Delete(id)
      console.log('Resp: ', resp)
      setPost(resp)
      toast.success("Post deletado com sucesso!")
    } catch (error) {
      console.error(error)
      toast.error("Post não deletado")
    }
  }


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme, active }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      textDecoration: active ?  "line-through" : "none"
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


    return (
      <TableContainer  component={Paper} sx={{ minWidth: 700}}>
        <Table sx={{ minWidth: 700}} >
          <TableHead>
            <TableRow>
              <StyledTableCell>Título da Task</StyledTableCell>
              <StyledTableCell>Descrição da Task</StyledTableCell>
              {/* <StyledTableCell align="right">Concluído</StyledTableCell>  */} 
              <StyledTableCell align="center">Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {post.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" >
                  {row.title}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.description}
                </StyledTableCell>
                {/* <StyledTableCell align="center">{row.concluido}<Checkbox
                  checked={check}
                  onClick={() => setCheck(!check)}
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                /> </StyledTableCell> */}
                <StyledTableCell align="center">{<DeleteIcon type="submit" size="small" onClick={() => deletePost(row.id)}>Del
                </DeleteIcon>}{<EditIcon size="small" onClick={() => editForm(row.id)}>Edit</EditIcon>}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default GetPost