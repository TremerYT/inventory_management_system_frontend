import {
  FaBoxes,
  FaCashRegister, FaMoneyBillWave,
  FaUsers, FaUserTie, FaWallet
} from "react-icons/fa";
import {MdRemoveShoppingCart, MdWarningAmber} from "react-icons/md";

export const cardInfo = [
  {
    icon: FaBoxes,
    iconColor: "#ff5c00",
    bgIconColor: "#ffc896",
    value: "Ksh 10,000",
    label: "Inventory Value",
  },
  {
    icon: FaCashRegister,
    iconColor: "#0067ff",
    bgIconColor: "#9ab2fb",
    value: "Ksh 245,000",
    label: "Sales Revenue",
  },
  {
    icon: FaWallet,
    iconColor: "#c70000",
    bgIconColor: "#ffb3b3",
    value: "Ksh 95,000",
    label: "Expenses",
  },
  {
    icon: FaMoneyBillWave,
    iconColor: "#00b300",
    bgIconColor: "#b3ffb3",
    value: "Ksh 150,000",
    label: "Net Profit",
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
    icon: MdWarningAmber,
    bgColor: "#00258e",
    value: "100",
    label:"Low Stock"
  },
  {
    icon: MdRemoveShoppingCart,
    bgColor: "#00611e",
    value: "100",
    label:"Out of Stock"
  },
]
