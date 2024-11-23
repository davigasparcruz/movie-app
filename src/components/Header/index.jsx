import { useState } from 'react'
import Logo from '../../assets/images/logo.svg'
import FavoriteIcon from '../../assets/images/favorite-icon.svg'
import UserIcon from '../../assets/images/user-icon.svg'

import './styles.css'
import { SearchInput } from '../SearchInput'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [searchInputValue, setSearchInputValue] = useState('')

  return (
    <div className='header-wrapper'>
      <Link to="/">
        <img src={Logo} alt='Imagem da logo' />
      </Link>

      <SearchInput
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
        onSearch={() => {
          console.log('Buscando...');

        }}
      />

      <div className='header-container-buttons'>
        <Link className='header-button-favorite' to="/favoritos">
          <img src={FavoriteIcon} alt='Imagem do botão de favoritos' />
        </Link>

        <Link className='header-button-profile' to="/perfil">
          <img src={UserIcon} alt='Imagem do botão de perfil' />
        </Link>
      </div>
    </div>
  )
}