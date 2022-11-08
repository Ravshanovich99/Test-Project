import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import "./Path.scss"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "checkout": "Оформить заказ",
          "orders": "Заказы",
          "reviews": "Отзывы",
          "products": "Товары",
          "main": "Главная"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export const Path = ({ cardTitle }) => {
  const { t } = useTranslation();

  const pathHandler = () => {
    const currentPath = window.location.pathname.split('/').filter(elem => elem != '').filter(elem => elem != 'Test-Project')
    if (currentPath[0]) {
      return currentPath
    } else {
      return ["main"]
    }
  }

  const pathTranslator = () => {
    const pathArr = pathHandler()
    const currentPath = []
    pathArr.forEach(elem => {
      if (isNaN(elem)) {
        currentPath.push(` ${t(elem)}`)
      } else {
        currentPath.push(` > ${cardTitle}`)

      }
    })

    return currentPath.join('')
  }

  return <div className="path-name">Заявки ><span className="current-path">{pathTranslator()}</span></div>;
}