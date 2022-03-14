import ReactDOM from 'react-dom';

import Barratopo from './Barratopo';
import Conteudo from './Conteudo';
import Perfil from './Perfil';

function App(){
    return(
        <div className='main'>
            <Barratopo />
            <Conteudo />
            <Perfil />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));