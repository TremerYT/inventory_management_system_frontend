import { Typography } from "antd";
import { itemDropdown } from "../../utils/menu_items.jsx";
import { useNavigate } from "react-router";
import {useState} from "react";

const { Text } = Typography;

const ItemDropdown = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false)
  const handleOnClick = (path) => {
    if (path === null) {
      setModalOpen(true);
    } else {
      navigate(path);
    }
  }
  return (
    <div className="flex gap-3 p-2 bg-white rounded shadow-md min-w-[150px]">
      {itemDropdown.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 p-2 rounded  cursor-pointer transition-colors"
          onClick={() => handleOnClick(item.path)}
        >
          <div className="flex items-center justify-center w-12 h-12 hover:bg-amber-400 rounded transition-colors duration-300 ease-in-out">
            {item.icon}
          </div>
          <Text className="text-sm font-medium">{item.label}</Text>
        </div>
      ))}
    </div>
  );
};

export default ItemDropdown;
