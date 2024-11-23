import './styles.css'

export const Input = ({label, id, name, value, onChange, placeholder, ...props}) => {
  return (
    <div className='input-wrapper'>
      <label htmlFor={id}>{label}</label>
      <input 
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}
