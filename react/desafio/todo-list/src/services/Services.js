import client from '../provider/client'

const apiCode = '0n5tc3h'

export const Get = () => {
    return client.get(`/${apiCode}`)
}

export const Post = (body) => {
    return client.post(`/${apiCode}`, body)
}

export const Put = (id, body) => {
    return client.put(`/${apiCode}/${id}`, body)
}

export function Delete(id) {
    return client.delete(`/${apiCode}/${id}`)
}
