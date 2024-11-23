import UserIcon from '../../assets/images/user-icon.svg'
import { ButtonLink } from '../../components/ButtonLink'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import './styles.css'

export const Profile = () => {
  return (
    <div className='profile-wrapper'>
      <div className='profile-aside'>
        <h1>Perfil</h1>

        <nav>
          <div className='profile-nav-image'>
            <img src={UserIcon} alt='Imagem do botão de perfil' />
          </div>

          <ButtonLink to={'/favoritos'}>
            Favoritos
          </ButtonLink>
          
          <ButtonLink to={'/assistir-depois'}>
            Assistir Depois
          </ButtonLink>
        </nav>
      </div>

      <div className='separator' />

      <form className='profile-form'>
        <Input id="name" name='name' label="Nome" placeholder='Usuário' />
        <Input id="email" name='email' label="E-mail" placeholder='email@exemplo.com' />
        <Input id="password" name='password' type="password" label="Senha" placeholder='Senha' />

        <Button className="btn profile-form-button-submit">
          Salvar alterações
        </Button>
      </form>
    </div>
  )
}