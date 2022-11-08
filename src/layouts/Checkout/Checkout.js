import { Cards } from "../../components/Cards/Cards"
import { Overlay } from "../../components/Overlay/Overlay"
import { TextInput } from "../../components/TextInput/TextInput"


export const Checkout = () => {
  return (
    <>
      <Overlay pageName={"Оформить заказ"}>
        <TextInput placeHolder={'Поиск по названию товара'} type={'search'} />
        <Cards />
      </Overlay>
    </>
  )
}