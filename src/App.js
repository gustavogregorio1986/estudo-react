import Conteudo from "./componentes/conteudo";
import Escrever from "./componentes/escrever";
import Estudo from "./componentes/estudo";
import Header from "./componentes/header";


function App() {
  return (
    <div className="App">
       <Header/>
       <Conteudo/>
       <Estudo/>
       <Escrever/>
    </div>
  );
}

export default App;
