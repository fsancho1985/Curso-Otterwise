// importando date-fns
import {addDays, compareAsc, format, parseISO} from 'date-fns'

const users = [
    {
      nome: 'Roberto Bruno Noah Ramos',
      data_nasc: '04/01/1953',
    },
    {
      nome: 'Manoel Bento Davi Bernardes',
      data_nasc: '16/11/2000',
    },
    {
      nome: 'Vanessa Catarina Isabel Moura',
      data_nasc: '03/03/1971',
    },
    {
      nome: 'Renan Anderson Raul de Paula',
      data_nasc: '10/01/1993',
    },
    {
      nome: 'Vicente Geraldo Thales Brito',
      data_nasc: '10/09/2003',
    },
    {
      nome: 'Isabelly Allana Freitas',
      data_nasc: '21/11/1972',
    },
    {
      nome: 'Melissa Bianca Jéssica Freitas',
      data_nasc: '14/09/1979',
    },
    {
      nome: 'César Thiago Bento Moreira',
      data_nasc: '25/10/1951',
    },
    {
      nome: 'João Benício Peixoto',
      data_nasc: '25/10/1961',
    }
  ]

/**
 * 1 - Crie um algoritmo que imprime no console um array de objetos usuários ordenado por data de aniversário de forma crescente.
 */
// const usersConverted = users.map((elem) => ({...elem, data_nasc: new Date(elem.data_nasc.split("/").reverse().join("-"))}))
// const usersConverted = users.map((elem) => ({...elem, data_nasc: new Date(`${elem.data_nasc.getDate() +1}/${elem.data_nasc.getMonth()}/${elem.data_nasc.getFullYear()}`)}))
// users.map((elem) => elem.data_nasc = new Date(elem.data_nasc))
const filterMap = users.map((item) => ({...item, data_nasc: format(
    new Date(
      Number(item.data_nasc.split('/')[2]),
      Number(item.data_nasc.split('/')[1]),
      Number(item.data_nasc.split('/')[0]),
    ),
    'MM-yyyy-dd'
  )
}))
console.log('Datas originais: ', filterMap)
 
let orderDates = filterMap.sort((a,b) => a.data_nasc - b.data_nasc)
// orderDates.forEach((elem) => elem.data_nasc.setDate(orderDates.data_nasc.getDate() + 1)
// console.log('Datas ordenadas: ', orderDates)
  
const ordered = orderDates.map((elem) => ({...elem, data_nasc: format(new Date(elem.data_nasc), 'dd/MM/yyyy')}))

// console.log(order[0].data_nasc)
// orderDates.forEach((elem) => elem.data_nasc = new Date())
// console.log(typeof(orderDates[0].data_nasc))
// orderDates.forEach((elem) => elem.data_nasc.setDate())
// console.log('Datas originais', users)
console.log('Datas ordenadas: ', ordered)
// console.log(format(new Date(), 'dd/MM/yyyy'))