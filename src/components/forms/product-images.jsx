import {Card, Typography, Form, Upload} from "antd";
import {useState} from "react";
import {PlusOutlined} from "@ant-design/icons";

const {Title} = Typography;
const ProductImages = () => {
  const [fileList, setFileList] = useState([]);
  const handleOnChange = ({ fileList }) => {
    setFileList(fileList);
  }
  return (
    <Card title={<Title level={5}>Product Images</Title>} >
      <Form.Item
        name="images"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
        rules={[{ required: true, message: "Please upload at least one image" }]}
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={handleOnChange}
          beforeUpload={() => false}
        >
          {
            fileList.length >= 5 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )
          }
        </Upload>
      </Form.Item>
    </Card>
  );
}

export default ProductImages;