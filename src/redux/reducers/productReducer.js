import { actionTypes } from "../types/actionTypes";

const initialState = [
  {
    id: 1,
    title: 'Смартфон Samsung Galaxy',
    price: 6000000,
    discount: true,
    prize: true,
    changeToOld: false,
    image: 'image-21.png',
    discountToIphone: false,
    OS: "Android 14",
    type: "моноблок (классический)",
    standard: "2G, 3G, 4G (LTE), 5G"
  },
  {
    id: 2,
    title: 'Смартфон Apple iPhone 11 128 Gb Slim Box черный',
    price: 6000000,
    discount: true,
    prize: true,
    changeToOld: true,
    image: 'image-22.png',
    discountToIphone: true,
    OS: "iOS 14",
    type: "моноблок (классический)",
    standard: "2G, 3G, 4G (LTE), 5G"
  },
  {
    id: 3,
    title: 'Наушники Apple Airpods',
    price: 6000000,
    discount: true,
    prize: true,
    changeToOld: true,
    image: 'image-23.png',
    discountToIphone: false,
    OS: "iOS 14",
    type: "моноблок (классический)",
    standard: "2G, 3G, 4G (LTE), 5G"
  },
  {
    id: 4,
    title: 'Samsung Galaxy Z',
    price: 6000000,
    discount: true,
    prize: true,
    changeToOld: false,
    image: 'image-26.png',
    discountToIphone: false,
    OS: "Android 14",
    type: "моноблок (классический)",
    standard: "2G, 3G, 4G (LTE), 5G"
  },
  {
    id: 5,
    title: 'Смартфон Samsung Galaxy',
    price: 6000000,
    discount: true,
    prize: true,
    changeToOld: false,
    image: 'image-21.png',
    discountToIphone: false,
    OS: "Android",
    type: "моноблок (классический)",
    standard: "2G, 3G, 4G (LTE), 5G"
  },
  {
    id: 6,
    title: 'Смартфон Apple iPhone 11 128 Gb Slim Box черный',
    price: 6000000,
    discount: true,
    prize: true,
    changeToOld: true,
    image: 'image-22.png',
    discountToIphone: true,
    OS: "iOS 14",
    type: "моноблок (классический)",
    standard: "2G, 3G, 4G (LTE), 5G"
  },
  {
    id: 7,
    title: 'Наушники Apple Airpods',
    price: 6000000,
    discount: true,
    prize: true,
    changeToOld: true,
    image: 'image-23.png',
    discountToIphone: false,
    OS: "iOS 14",
    type: "моноблок (классический)",
    standard: "2G, 3G, 4G (LTE), 5G"
  },
  {
    id: 8,
    title: 'Samsung Galaxy Z',
    price: 6000000,
    discount: true,
    prize: true,
    changeToOld: false,
    image: 'image-26.png',
    discountToIphone: false,
    OS: "Android 14",
    type: "моноблок (классический)",
    standard: "2G, 3G, 4G (LTE), 5G"
  },
  {
    id: 9,
    title: 'Смартфон Samsung Galaxy',
    price: 6000000,
    discount: true,
    prize: true,
    changeToOld: false,
    image: 'image-21.png',
    discountToIphone: false,
    OS: "Android 14",
    type: "моноблок (классический)",
    standard: "2G, 3G, 4G (LTE), 5G"
  },
  {
    id: 10,
    title: 'Смартфон Apple iPhone 11 128 Gb Slim Box черный',
    price: 6000000,
    discount: true,
    prize: true,
    changeToOld: true,
    image: 'image-22.png',
    discountToIphone: true,
    OS: "iOS 14",
    type: "моноблок (классический)",
    standard: "2G, 3G, 4G (LTE), 5G"
  },
]

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state
      break;

    default:
      return state
      break;
  }
}