import { NavLink } from 'react-router-dom'
import { Button } from '../Buttons/Buttons'
import './Sidebar.scss'

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="btns-container">
        <NavLink to='Test-Project/' className={({ isActive }) => {
          return isActive ? "active" : '';
        }}>
          <Button title={"Главная"} icon={<i className="material-icons">home</i>} />
        </NavLink >
        <NavLink to='Test-Project/orders' className={({ isActive }) => {
          return isActive ? "active" : '';
        }}>
          <Button title={"Заказы"} icon={<i className="material-icons">format_align_left</i>} />
        </NavLink >
        <NavLink to='Test-Project/products' className={({ isActive }) => {
          return isActive ? "active" : '';
        }}>
          <Button title={"Товары"} icon={<i className="material-icons">local_mall</i>} />
        </NavLink >
        <NavLink to='Test-Project/reviews' className={({ isActive }) => {
          return isActive ? "active" : '';
        }}>
          <Button title={"Отзывы"} icon={<i className="material-icons">star_border</i>} />
        </NavLink >
        <NavLink to='Test-Project/checkout' className={({ isActive }) => {
          return isActive ? "active" : '';
        }}>
          <Button title={"Оформить заказ"} icon={<i className="material-icons">shopping_cart</i>} />
        </NavLink >
      </div>
    </div>
  )
}