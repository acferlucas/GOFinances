import { Header } from './components/Header';
import { Card } from './components/Card';
import {Tr} from './components/Tr'
import './styles/global.css'
import './styles/main.css'
import {FiChevronDown} from 'react-icons/fi'
function App() {
  return (
    <>
    <Header />
    <main>
      <div className="status">
        <Card type="entrada"/>
        <Card type="saida" />
        <Card type="total" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Titulo <FiChevronDown /></th>
            <th>Preço <FiChevronDown /></th>
            <th>Categoria <FiChevronDown /></th>
            <th>Data <FiChevronDown /></th>
          </tr>
        </thead>
        <tbody>
          <Tr 
            category="entrada-dinheiro" 
            date={new Date()} 
            title="Desenvolvimento de site" 
            price={2000}
          />
          <Tr 
            category="saida-dinheiro"
            date={new Date()}
            title="Compra de monitor"
            price={1200}  
          />
          <Tr 
            category="entrada-dinheiro"
            date={new Date()}
            title="Ensinar React"
            price={3000}
          />
           <Tr 
            category="saida-dinheiro"
            date={new Date()}
            title="Curso React"
            price={1500}
          />
        </tbody>
      </table>
    </main>
    </>
    );
  }
  
  export default App;
  