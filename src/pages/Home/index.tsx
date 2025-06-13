import BoataoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTrefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaDeTrefas />
    <BoataoAdicionar />
  </>
)

export default Home
