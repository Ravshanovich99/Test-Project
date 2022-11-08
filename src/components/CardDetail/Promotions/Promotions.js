import "./Promotions.scss"

export const Promotions = ({ prize, discount, discountToIphone, changeToOld }) => {

  return (
    <>
      <h2 className="promotions-title">Акции</h2>
      <div className="change-to-old">
        <label htmlFor="change-to-old">
          <span className="icon-change">
            <i className="material-icons">cached</i>
          </span>
          <div className="change-to-old__info">
            <h3>Обменяй свой старый айфон и получи скидку на новый</h3>
            <p>-400 000 сум</p>
          </div>
        </label>
        <input type="checkbox" name="change" id="change-to-old" />
      </div>
      <div className="prize">
        <label htmlFor="prize">
          <span className="icon-prize">
            <i className="material-icons">card_giftcard</i>
          </span>
          <div className="prize__info">
            <h3>Наушники в подарок</h3>
            <p>Apple EarPods</p>
          </div>
        </label>
        <input type="checkbox" name="change" id="prize" defaultChecked={prize} />
      </div>
      <div className="discount">
        <label htmlFor="discount">
          <span className="icon-discount">
            <i className="material-icons">discount</i>
          </span>
          <div className="discount__info">
            <h3>Скидка 20% на смартфоны</h3>
            <p>-10 000 сум</p>
          </div>
        </label>
        <input type="checkbox" name="change" id="discount" defaultChecked={discount} />
      </div>
      <div className="discount-to-iphone">
        <label htmlFor="discount-to-iphone">
          <span className="icon-discount-iphone">
            <i className="material-icons">discount</i>
          </span>
          <div className="change-to-iphone__info">
            <h3>Скидка на айфоны</h3>
            <h3>IMEI 012345678901234</h3>
            <p>-10 000 сум</p>
          </div>
        </label>
        <input type="checkbox" name="change" id="discount-to-iphone" defaultChecked={discountToIphone} />
      </div>

    </>
  )
}