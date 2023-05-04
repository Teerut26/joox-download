import { Button, Form, Input } from "antd";
import { NextPage } from "next";
import { useLocalStorage } from "usehooks-ts";
import { Cookie, SettingInterface } from "../interface/SettingInterface";

interface Props {}

const Setting: NextPage<Props> = () => {
    const [form] = Form.useForm();

    const [Setting, setSetting] = useLocalStorage<SettingInterface | undefined>(
        "setting",
        undefined
    );

    const onSave = () => {
        const cookie = JSON.parse(form.getFieldValue("cookie")) as Cookie[];
        const path = form.getFieldValue("path") as string;

        setSetting({
            cookies: cookie,
            path,
        });
    };

    return (
        <Form
            initialValues={{
                cookie: JSON.stringify(Setting?.cookies),
                path: Setting?.path,
            }}
            form={form}
            onFinish={onSave}
            layout="vertical"
        >
            <Form.Item name={"cookie"} label="Cookie">
                <Input.TextArea />
            </Form.Item>
            <Form.Item name={"path"} label="Path for save songs">
                <Input />
            </Form.Item>
            <Button htmlType="submit" type="primary">
                Save
            </Button>
        </Form>
    );
};

export default Setting;
