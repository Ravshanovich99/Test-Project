import "./TextInput.scss"
export const TextInput = ({ placeHolder, type }) => {
  return (
    <div className="textInp-container">
      <input type={"text"} className="textInp" placeholder={placeHolder} />
      {
        type === "search" && (
          <div className="icon-container">
            <i className="material-icons">search</i>
          </div>
        )
      }
    </div>
  )
}