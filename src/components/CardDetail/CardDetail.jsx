import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "./CardDetail.scss"
import { PercentCalculator } from "./PercentCalculator/PercentCalculator";
import { Promotions } from "./Promotions/Promotions";
import { useState } from "react";
import { ShoppingCart } from "./ShoppingCart/SHoppingCart";

export const CardDetail = ({ product }) => {

  const { title, image, price, prize, changeToOld, discount, discountToIphone, type, standard, OS } = product

  const [itemCount, setItemCount] = useState(0)
  const [itemAdded, setItemAdded] = useState(false)

  return (
    <div className="card-detail-container">
      <ShoppingCart itemCount={itemCount} />
      <h3 className="title">{title}</h3>
      <div className="top-container">
        <div className="img-block">
          <div className="icons">
            {
              changeToOld ? (<span className="icon-change">
                <i className="material-icons">cached</i>
              </span>)
                :
                null
            }
            {
              prize ? (
                <span className="icon-prize">
                  <i className="material-icons">card_giftcard</i>
                </span>
              )
                :
                null
            }

            {
              discount ? (<span className="icon-discount">
                <i className="material-icons">discount</i>
              </span>)
                :
                null
            }
            {
              discountToIphone ? (<span className="icon-discount-iphone">
                <i className="material-icons">discount</i>
              </span>)
                :
                null
            }
          </div>
          <div className="image-swiper">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              <SwiperSlide>
                <img src={require(`../../assets/images/${image}`)} alt="phone" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require(`../../assets/images/${image}`)} alt="phone" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require(`../../assets/images/${image}`)} alt="phone" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require(`../../assets/images/${image}`)} alt="phone" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require(`../../assets/images/${image}`)} alt="phone" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require(`../../assets/images/${image}`)} alt="phone" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="info-block">
          <div className="price">
            <p className="price-title">
              Цена телефона
            </p>
            <h3>{price} сум</h3>
          </div>
          <div className="price-percent">
            <p className="price-title">
              Общая цена (с наценкой)
            </p>
            <PercentCalculator price={price} />
          </div>
          <div className="characters">
            <p className="characteristics-title">
              Общие характеристики
            </p>
            <div className="characters-description">
              <p>Тип: {type}</p>
              <p>Стандарт: {standard}</p>
              <p>Операционная система: {OS}</p>
            </div>
          </div>
          <div className="show-all">
            <h3>Показать все</h3>
            <span>></span>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <Promotions
          prize={prize}
          changeToOld={changeToOld}
          discount={discount}
          discountToIphone={discountToIphone}
        />
      </div>
      {
        !itemAdded ? <button className="btn" onClick={() => { setItemCount(itemCount + 1); setItemAdded(true) }}>
          Добавить в корзину
        </button>
          :
          <button className="btn" disabled>Добавлено</button>

      }
    </div >
  )
}