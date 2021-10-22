import { jokesList } from '../data'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Deve existir um botão no qual retorna o usuário para a tela de login */}
      <div>
        <ul>
          {jokesList.map((item) => (
            <li>{item.title}</li>
            // Extra: se o usuário clicar em um item deve ser redirecionado para os detalhes do item selecionado
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
