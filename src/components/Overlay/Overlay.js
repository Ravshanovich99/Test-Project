import { Path } from "../Path/Path"
import "./Overlay.scss"

// To-DO: create component "Path" and make it dynamic
export const Overlay = ({ pageName, children, cardTitle }) => {

  return (
    <div className="overlay-container">
      <Path cardTitle={cardTitle} />
      {
        pageName && <h2 className="page-name">
          {pageName}
        </h2>
      }
      {
        children && children
      }
    </div>
  )
}