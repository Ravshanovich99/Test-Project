import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Overlay } from "../../components/Overlay/Overlay"
import { CardDetail } from "../../components/CardDetail/CardDetail"

export const CardDetails = () => {
  const { id } = useParams()
  const product = useSelector(state => state.allProducts.find(product => product.id == id))
  // console.log(product);
  return (
    <Overlay cardTitle={product.title} >
      <CardDetail product={product} />
    </Overlay>
  )
}