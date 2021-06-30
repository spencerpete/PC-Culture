
const Button = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>
}

Button.defaultProps = {
  onClick: null
}
export default Button
