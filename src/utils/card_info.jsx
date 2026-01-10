import {
  FaAd,
  FaBoxes,
  FaBoxOpen,
  FaCashRegister,
  FaMoneyBillWave,
  FaShoppingCart, FaTruck, FaTruckLoading, FaUndoAlt,
  FaUser,
  FaUsers, FaUserTie
} from "react-icons/fa";

export const cardInfo = [
  {
    icon: FaBoxes,
    iconColor: "#ff5c00",
    bgIconColor: "#ffc896",
    value: "Ksh 10,000",
    label: "Stock Worth",
  },
  {
    icon: FaCashRegister,
    iconColor: "#0067ff",
    bgIconColor: "#9ab2fb",
    value: "Ksh 245,000",
    label: "Total Sales Amount",
  },
  {
    icon: FaMoneyBillWave,
    iconColor: "#00611e",
    bgIconColor: "#baffc0",
    value: "Ksh 245,000",
    label: "Total Expense Amount",
  },
  {
    icon: FaShoppingCart,
    iconColor: "#ff0000",
    bgIconColor: "#ffb4b4",
    value: "Ksh 245,000",
    label: "Products Sold",
  },
];

export const statsCards = [
  {
    icon: FaUsers,
    bgColor: "#ff630d",
    value: "100",
    label:"customers"
  },
  {
    icon: FaUserTie,
    bgColor: "#3c89fb",
    value: "100",
    label:"Suppliers"
  },
  {
    icon: FaTruck,
    bgColor: "#00258e",
    value: "100",
    label:"Orders"
  },
  {
    icon: FaUndoAlt,
    bgColor: "#00611e",
    value: "100",
    label:"Returns"
  },
]
