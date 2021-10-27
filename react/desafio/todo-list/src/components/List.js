import {Button} from '@mui/material'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
// import { useParams } from 'react-router'
// import { useForm } from 'react-hook-form'

import {Delete, Get, Put} from '../services/Services'

import '../styles/list.css'

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
        console.log(tasks)
        setPost(tasks)
      } catch (error) {
        console.log("fudeu!")
      }
    }
    fetchData()
  }, [])

  if (!post) return null

  const deletePost = async (id) => {
    try {
      const {data: resp} = await Delete(id)
      console.log('Resp: ', resp)
      alert('Deletou')
      setPost(resp)
    } catch (error) {
      console.error(error)
      alert('Não deletou!')
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
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
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
              <StyledTableCell align="center">Descrição da Task</StyledTableCell>
              <StyledTableCell align="right">Concluído</StyledTableCell>
              <StyledTableCell align="center">Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {post.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="center">{row.concluido}</StyledTableCell>
                <StyledTableCell align="center">{<Button type="submit" size="small" onClick={() => deletePost(row.id)}>Del
                </Button>}{<Button size="small" onClick={() => editForm(row.id)}>Edit</Button>}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default GetPost