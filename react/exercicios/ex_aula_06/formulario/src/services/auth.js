import client from '../provider/client'


export const enviaPost = (body) => client.post('https://jsonplaceholder.typicode.com/posts', body)
 