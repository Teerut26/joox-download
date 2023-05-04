import { css } from "@emotion/css";
import { Avatar, Button, Layout, List, Typography } from "antd";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ResponseListSongInterface } from "../../interface/ResponseListSongInterface";
import axios from "axios";
import { SettingInterface } from "../../interface/SettingInterface";
import { useLocalStorage } from "usehooks-ts";

interface Props {}

const Chart: NextPage<Props> = () => {
    const { query, back } = useRouter();

    const [DataFromApi, setDataFromApi] = useState<
        ResponseListSongInterface | undefined
    >();

    const [Setting, setSetting] = useLocalStorage<SettingInterface | undefined>(
        "setting",
        undefined
    );

    const getListsSong = async () => {
        let { data } = await axios.get<ResponseListSongInterface>(
            `https://corsproxy.io/?https://api-jooxtt.sanook.com/page/chartDetail?country=th&lang=th&id=${query.id}`
        );
        setDataFromApi(data);
    };

    const onDownload = async () => {
        console.log("download");
        await axios.post("/api/download", {
            id: query.id,
        });
    };

    useEffect(() => {
        if (query.id) {
            getListsSong();
        }
    }, [query.id]);

    return (
        <div
            className={css`
                display: flex;
                flex-direction: column;
            `}
        >
            <Button
                className={css`
                    position: sticky;
                    top: 0;
                    z-index: 1;
                `}
                onClick={() => back()}
                type="primary"
            >
                Back
            </Button>
            <Layout.Content
                className={css`
                    padding: 1rem;
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                `}
            >
                <Button onClick={onDownload}>Download</Button>
                <div>Save To: {Setting.path}</div>
            </Layout.Content>
            <Layout.Content
                style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
            >
                {DataFromApi ? (
                    <List
                        itemLayout="horizontal"
                        dataSource={DataFromApi.tracksItemList.tracks.items}
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
                                        <div>
                                            {index + 1} {item.name}
                                        </div>
                                    }
                                    description={item.artist_list[0].name}
                                />
                            </List.Item>
                        )}
                    />
                ) : (
                    "Loading..."
                )}
            </Layout.Content>
        </div>
    );
};

export default Chart;
