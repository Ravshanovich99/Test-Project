import './Button.scss'

export const Button = ({ title, icon }) => {
  return (
    <button className="button">
      {icon ? icon : null} {title}
    </button>
  )
}