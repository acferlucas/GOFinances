import { Header } from './components/Header';
import { Card } from './components/Card';
import {Tr} from './components/Tr'
import './styles/global.css'
import './styles/main.css'
import {FiChevronDown} from 'react-icons/fi'
import {api} from './services/api'
import { useEffect, useState } from 'react';
function App() {
  
  const [transactions, setTransaction] = useState([])
  
  useEffect(() => {
    
    async function loadActivity(){
      
       const response = await api.get('activity')
       
       setTransaction(response.data)
    }

    loadActivity()
  },[])
  
  const formater = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })

  const values = transactions.reduce((accumulator, transaction) => {
    if (transaction.entrance) {
      return [accumulator[0] + transaction.value, accumulator[1], accumulator[2] + transaction.value]
    }

    return [accumulator[0], accumulator[1] + transaction.value, accumulator[2] - transaction.value]
  }, [0, 0, 0])

  return (
    <>
    <Header/>
    <main>
      <div className="status">
        <Card type="entrada" value={formater.format(values[0])} />
        <Card type="saida" value={formater.format(values[1])} />
        <Card type="total" value={formater.format(values[2])} />
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
          
          {transactions.map((activity) =>(
            <Tr activity= {activity}/>
          ))}
        </tbody>
      </table>
    </main>
    </>
    );
  }
  
  export default App;
  