import './style.css'

import logoImg from '../../assets/LogmyFinance.svg'

export function Header(){
  return (
    <header>
      <div>
        <img src={logoImg} alt="Logo"/>
        <div>
          <a href="#">Listagem</a>
          <a href="#">Importar</a>
        </div>
      </div>
    </header>
  )
}