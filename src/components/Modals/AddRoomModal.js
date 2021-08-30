import { Form, Input, Modal } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { addDocument } from "../../firebase/services";

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    addDocument("rooms", { ...form.getFieldsValue(), members: [uid] });

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
        title="CREATE ROOM"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="ROOM NAME" name="name">
            <Input placeholder="Enter room name..." />
          </Form.Item>
          <Form.Item label="DESCRIPTION" name="description">
            <Input.TextArea placeholder="Enter description..." />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
