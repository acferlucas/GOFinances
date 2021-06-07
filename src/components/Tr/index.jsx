import './style.css'
import {FiDollarSign} from 'react-icons/fi'

const formater = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })

export function Tr({category, title, price, date}){
  return (
    <tr>
      <td>{title}</td>
      <td className={category}>
        { category === 'saida-dinheiro' ? 
          `- ${formater.format(price)}` : 
          formater.format(price)
        }
        </td>
      <td><FiDollarSign size={20} color="#969CB2"/> Venda</td>
      <td>{date.toLocaleDateString()}</td>
    </tr>
  )
}