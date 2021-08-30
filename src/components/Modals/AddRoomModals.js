import { Form, Input, Modal } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { addDocument } from "../../Firebase/services";

export default function AddRoomModals() {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();
  const handleOk = () => {
    console.log({ formData: form.getFieldValue() });
    addDocument("rooms", { ...form.getFieldValue(), members: [uid] });

    form.resetFields();

    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    form.resetFields();

    setIsAddRoomVisible(false);
  };

  return (
    <div>
      <Modal
        title="Create room"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item lable="Room name" name="name">
            <Input placeholder="Enter room name" />
          </Form.Item>
          <Form.Item lable="Description" name="description">
            <Input placeholder="Enter description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
