import { Link } from "react-router-dom"
import "./Card.scss"

export const Card = ({ cards }) => {
  return (
    cards.map((card) => {
      const splicedTitle = () => {
        return card.title.substring(0, 16)
      }

      return (
        <div className="card-container" key={card.id}>
          <Link to={window.location.pathname + `/${card.id}`}>
            <div className="inner-container">
              <div className="icons">
                {
                  card.prize ? (
                    <span className="icon-prize">
                      <i className="material-icons">card_giftcard</i>
                    </span>
                  )
                    :
                    null
                }

                {
                  card.changeToOld ? (<span className="icon-change">
                    <i className="material-icons">cached</i>
                  </span>)
                    :
                    null
                }
                {
                  card.discount ? (<span className="icon-discount">
                    <i className="material-icons">discount</i>
                  </span>)
                    :
                    null
                }
              </div>
              <div className="img-block">
                <img src={require(`../../../assets/images/${card.image}`)} alt="phone" />
              </div>
            </div>
            <div className="text-container">
              <h3 className="title">
                {splicedTitle()}...
              </h3>
              <h3 className="price">
                {card.price}
              </h3>
              <div className="price-per-month">
                <h3>{card.pricePerMonth}</h3> <span className="months-to-pay">x{card.monthsToPay}</span>
              </div>
            </div>
          </Link>
        </div>
      )
    })
  )
}