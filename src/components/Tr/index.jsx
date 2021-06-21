import './style.css'
import {FiDollarSign} from 'react-icons/fi'

const formater = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })

export function Tr( {activity} ){
  return (
    <tr>
      <td>{activity.title}</td>
      <td className={activity.entrance ? "entrada-dinheiro" : "saida-dinheiro"}>
        { activity.Entrance ? formater.format(activity.value) : `- ${formater.format(activity.value)}` }
        </td>
      <td><FiDollarSign size={20} color="#969CB2"/> Venda</td>
      <td>{activity.data}</td>
    </tr>
  )
}