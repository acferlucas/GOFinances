import './style.css'
import {FiArrowUpCircle} from 'react-icons/fi'
import {FiDollarSign} from 'react-icons/fi'
import {FiArrowDownCircle} from 'react-icons/fi'

export function Card({type,value}){
  
  return (
    <div className={type}>
      <div>
        <h1>{type}</h1>
      <span>
          { type === 'entrada' && <FiArrowUpCircle size={32} color="#12A454"/> }
          { type === 'saida' &&   <FiArrowDownCircle size={32} color="#E83F5B"/> }
          { type === 'total' &&   <FiDollarSign size={32}/> }
      </span>
      </div>
        <h1>{value}</h1>
      </div>
  )
}