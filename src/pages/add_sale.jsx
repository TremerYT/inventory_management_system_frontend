import {Button, Card} from "antd";
import {FileExcelFilled, FilePdfFilled, PlusOutlined, ReloadOutlined} from "@ant-design/icons";
import SalesForm from "../components/forms/sales_form.jsx";

const AddSale = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl">Create Sale</h2>
          <p>Create and manage your sales</p>
        </div>
      </div>
      <Card>
        <SalesForm/>
      </Card>
    </>


  )
}

export default AddSale;