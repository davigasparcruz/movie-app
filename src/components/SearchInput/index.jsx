
import SearchIcon from '../../assets/images/search-icon.svg'

import './styles.css'

export const SearchInput = ({value, onChange, onSearch}) => {
  return (
    <div className="search-input-wrapper">
      <input 
        type="text" 
        placeholder="Buscar por filme" 
        value={value} 
        onChange={onChange} 
      />

      <button type="button" onClick={onSearch}>
        <img src={SearchIcon} alt="" />
      </button>
    </div>
  );
}

