import {useForm} from 'react-hook-form'
import {enviaPost} from '../services/auth'


function Post() {

    const {register, handleSubmit} = useForm()


    const onSubmit = async data => {
        try {
            console.log(data)
            const {data: resp} = await enviaPost(data)
            console.log(resp)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Postagem</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' name='title' {...register('title')}/>
                <input type='text' name='body' {...register('body')}/>
                <button type='submit'> Criar </button>
            </form>
        </div>
    )
}

export default Post