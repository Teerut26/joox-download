import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
    Layout,
    Form,
    Select,
    InputNumber,
    DatePicker,
    Switch,
    Slider,
    Button,
    List,
    Avatar,
    Typography,
    Modal,
} from "antd";
import axios from "axios";
import { ResponseInterface } from "../interface/ResponseInterface";
import { css } from "@emotion/css";
import Setting from "../components/Setting";

const { Header, Content } = Layout;
const { Item: FormItem } = Form;
const { Option } = Select;

function Home() {
    const [DataFromApi, setDataFromApi] = useState<
        ResponseInterface | undefined
    >();
    const [ShowModalSetting, setShowModalSetting] = useState(false);

    const getTopCharts = async () => {
        let { data } = await axios.get<ResponseInterface>(
            "https://corsproxy.io/?https://api-jooxtt.sanook.com/page/chartlist?country=th&lang=th&device=desktop"
        );
        setDataFromApi(data);
    };

    useEffect(() => {
        getTopCharts();
    }, []);

    return (
        <React.Fragment>
            <Modal
            centered
                title="ตั้งค่า"
                open={ShowModalSetting}
                onOk={() => {}}
                onCancel={() => setShowModalSetting(false)}
            >
                <Setting />
            </Modal>
            <Content style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
                <div
                    className={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    `}
                >
                    <Typography.Title>Top Charts</Typography.Title>
                    <Button
                        onClick={() => setShowModalSetting((pre) => !pre)}
                        type="primary"
                    >
                        ตั้งค่า
                    </Button>
                </div>
                {DataFromApi ? (
                    <List
                        itemLayout="horizontal"
                        dataSource={DataFromApi.topcharts.data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar
                                            src={item.images[0].url}
                                            shape="square"
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                            }}
                                        />
                                    }
                                    title={
                                        <a href={`/chart/${item.id}`}>
                                            {item.name}
                                        </a>
                                    }
                                    description={`อัพเดท ${item.update_time}`}
                                />
                            </List.Item>
                        )}
                    />
                ) : (
                    "Loading..."
                )}
            </Content>
        </React.Fragment>
    );
}

export default Home;
