import './style.css'
import {FiArrowUpCircle} from 'react-icons/fi'
import {FiDollarSign} from 'react-icons/fi'
import {FiArrowDownCircle} from 'react-icons/fi'

export function Card({type}){
  return (
    <div className={type}>
      <div>
        { type === 'entrada' && <h1>{type}</h1>}
        { type === 'saida' && <h1>{type}</h1>}
        { type === 'total' && <h1>{type}</h1>}
        <span>
          { type === 'entrada' && <FiArrowUpCircle size={32} color="#12A454"/> }
          { type === 'saida' && <FiArrowDownCircle size={32} color="#E83F5B"/> }
          { type === 'total' && <FiDollarSign size={32}/> }
        </span>
      </div>
      {type === 'entrada' && <h1>R$ 5.500,00</h1>}
      {type === 'saida' && <h1>R$ 2.700,00</h1>}
      {type === 'total' && <h1>R$ 2.300,00</h1>}
    </div>
  )
}