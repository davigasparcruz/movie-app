
import Filme from '../../assets/images/filme.jpeg'
import SaveIcon from '../../assets/images/save-icon.jpeg'
import Favoritos from '../../assets/images/favorite-icon.svg'
import './styles.css'

export const MovieDetails = () => {
  return (
    <div className='movie-details-wrapper'>
      <div className='movie-details-image'>
        <img src={Filme} alt="Tela do filme" />
      </div>

      <div className='movie-details-descricao'>
        <h1>Luiz Gonzaga – O reino do baião</h1>

        <p>Gênero, data de lançamento.</p>

        <p>Descrição do filme: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam amet pariatur doloribus soluta aliquid iste suscipit ad, error eos magnam quisquam illo quibusdam deserunt ipsum. Quos accusantium iusto quasi aut.</p>
        
        <button 
          className='movie-details-button'
          type='button'
          onClick={()=>{
            console.log("clicou")
          }}
        >
          <img className='favorite-icon' src={Favoritos} alt="Favoritos" />
          <p>Adicionado aos Favoritos</p>
        </button>
        
        <button
          className='movie-details-button'
          type='button'
        >
          <img src={SaveIcon} alt="Salvar" />
          <p>Salvar em Assistir Depois</p>
        </button>
      </div>
    </div>
  )
}