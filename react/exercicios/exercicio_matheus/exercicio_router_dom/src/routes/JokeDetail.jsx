import { jokesList } from '../data'

const JokeDetail = () => {
  // alterar o valor null para que receba o id vindo da naveção
  const joke = jokesList.find((item) => item.id === null) || {}

  return (
    <div>
      <button>Voltar </button>
      {/* Deve existir um botão no qual retorna o usuário para a dashboard */}
      <h1>Resposta da piada {joke.title}</h1>
      <p>{joke?.title || 'Ops.. não foi possível pegar o título.'}</p>
      <p>{joke?.answer || 'Ops.. não foi possível pegar resposta.'}</p>
    </div>
  )
}

export default JokeDetail
