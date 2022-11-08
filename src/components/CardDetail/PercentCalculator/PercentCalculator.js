import "./PercentCalculator.scss"
import { useState } from "react"

export const PercentCalculator = ({ price }) => {

  const [month, setMonth] = useState(3)

  const percentHandler = (month) => {
    const percent = 0.05 * month / 3
    return percent
  }

  const totalPriceWithPercent = (month) => {
    return price + price * percentHandler(month) + 1000000
  }

  const perMonthPayment = (month) => {
    return Math.round(totalPriceWithPercent(month) / month)
  }

  return (
    <>
      <div className="payments">
        <h3>{totalPriceWithPercent(month)} сум</h3>
        <div className="payment-per-month">
          <h3>{perMonthPayment(month)} сум</h3> <span>x {month}</span>
        </div>
      </div>
      <div className="month-btns">
        <button className={month === 3 ? 'month-btn active' : 'month-btn'} onClick={() => setMonth(3)}>
          3 мес
        </button>
        <button className={month === 6 ? 'month-btn active' : 'month-btn'} onClick={() => setMonth(6)}>
          6 мес
        </button>
        <button className={month === 12 ? 'month-btn active' : 'month-btn'} onClick={() => setMonth(12)}>
          12 мес
        </button>
        <button className={month === 24 ? 'month-btn active' : 'month-btn'} onClick={() => setMonth(24)}>
          24 мес
        </button>
      </div>
      <h3 className="percent">Наценка: {(percentHandler(month) * 100).toFixed(0)}%</h3>

    </>
  )
}