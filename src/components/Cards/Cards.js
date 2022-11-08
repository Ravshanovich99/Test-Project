import { cards } from '../../assets/data/data'
import { Card } from './Card/Card'
import "./Cards.scss"


export const Cards = () => {
  return (
    <div className='cards-container'>
      <h3 className='cards-title'>Все товары({cards.length})</h3>
      <div className='cards'>
        <Card cards={cards} />
      </div>
    </div>
  )
}
