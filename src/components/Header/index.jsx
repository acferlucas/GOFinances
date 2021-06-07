import './style.css'
import {FiArrowUpCircle} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

export function Header(){
  return (
    <header>
      <div>
        <img src={logoImg} alt=""/>
        <div>
          <a href="#">Listagem</a>
          <a href="#">Importar</a>
        </div>
      </div>
    </header>
  )
}