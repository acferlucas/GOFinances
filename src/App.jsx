import { Header } from './components/Header';
import { Card } from './components/Card';
import {Tr} from './components/Tr'
import './styles/global.css'
import './styles/main.css'
import {FiChevronDown} from 'react-icons/fi'
import {FiPlus} from 'react-icons/fi'
import {api} from './services/api'
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


function App() {
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [transactions, setTransaction] = useState([])
  const [isOpen , SetisOpen] = useState(false)

  const onSubmit = async (data) => {
    
    const title = data.description
    const value = Number(data.value)
    const entrance = (data.entrance === 'true' ? true : false)
    let totaldata = new Date();
    const date = ((totaldata.getDate() )) + "-" + ((totaldata.getMonth() + 1)) + "-" + totaldata.getFullYear(); 
    console.log(date);

    const response = await api.post('/activity',{
      title,
      value,
      entrance,
      date
    })

    reset()
    setTransaction([...transactions,response.data])
    SetisOpen(false)
  }

  function openModal(){
    SetisOpen(true)
  }
  
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

  function handleDelete(id) {
    
    api.delete(`activity/${id}`)
    setTransaction(transactions.filter(transaction => transaction.id !== id))
  }

  return (
    <>
    <Header/>
    
    <main>
      <div className="status">
        <Card type="entrada" value={formater.format(values[0])} />
        <Card type="saida" value={formater.format(values[1])} />
        <Card type="total" value={formater.format(values[2])} />
      </div>
      <button onClick={openModal}><FiPlus /> Nova transação</button>
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
            <Tr activity= {activity} handleDelete={handleDelete} key={activity.id}/>
          ))}
        </tbody>
      </table>
      <Modal 
        isOpen={isOpen}
        onRequestClose={() => {
          
          SetisOpen(false);
        }}
        style={{
          content: {
            width: '35%',
            height: '55%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            paddingLeft: 40,
            paddingRight: 40,
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#F0F0F5',
            border: 0,
            borderRadius:8,
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Nova transação</h1>
          <div>
            <input  type="text" placeholder="Descrição" {...register("description")}/>
            <input  type="number" placeholder="R$ 0,00" {...register("value")}/>
          </div>
          <select {...register("entrance")}>
            <option value="true">Entrada</option>
            <option value="false">Saida</option>
          </select>
          <button type="submit">Salvar</button>
        </form>
      </Modal>
    </main>
    </>
    );
  }
  
  export default App;
  