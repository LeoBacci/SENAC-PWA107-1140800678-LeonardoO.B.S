//importa o DOM do react
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 
// importa as paginas que o node vai utilizar
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato'
import Header from './Cabecalho';
// 
//Começo da função das rotas(paginas)
function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />{/*path é o caminho, element é a função do caminho*/}
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                {/* <Route path="*" element={<Erro />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;