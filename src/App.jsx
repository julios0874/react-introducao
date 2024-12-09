
const BoasVindas = ({nome, genero}) => {
  return (
    <h1>seja bem-vind{genero == 'f' ? 'a' : 'o'} {nome}</h1>
  )
} 

const alunos = [
  {
    nome: "levi",
    genero: "m"
  },
  {
    nome: "alexandre",
    genero: "m"
  },
  {
    nome: "nayara",
    genero: "f"
  },
  {
    nome: "liana",
    genero: "f"
  }

]

const App  = () => {
  return (
    <>
     {/* <BoasVindas nome="Levi"genero= "m"/>
    <BoasVindas nome="Alexandre"genero= "m"/>
    <BoasVindas nome="Nayara"genero= "f"/>
    <BoasVindas nome="Liana"genero= "f"/> */}
    </>
  )
}
(
  alunos.map(aluno => <BoasVindas nome={aluno.nome} genero={aluno.genero} />)
)
export default App;