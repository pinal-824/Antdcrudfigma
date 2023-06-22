import { QrcodeOutlined, GatewayOutlined, SettingOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import './App.css'
import React from 'react';
import { Calendar } from 'antd';
import { UsergroupAddOutlined, TeamOutlined, ShoppingCartOutlined, BuildOutlined, CarOutlined } from '@ant-design/icons'
import { Progress, Space } from 'antd';
import { Rate } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};
export const Applayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 300,
        marginTop: 100,
        marginBottom: 100,
        marginLeft: 20,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    const menuItems = [{ icons: <QrcodeOutlined />, label: "Dashboard" }, { icons: <TeamOutlined />, label: "Profile" }, { icons: <SettingOutlined />, label: "Subscription" }, { icons: <GatewayOutlined />, label: "Customization" }]
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                width="350"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div style={{ backgroundColor: "darkgreen", border: "2px solid dimgrey", borderBottomRightRadius: "30px", borderTopRightRadius: "30px", color: "white", textAlign: "center" }}>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" height="100px" width="100px" style={{ borderRadius: "50%" }} />
                    <h3>Tohamy</h3>
                    <p>tohamy99@yahoo.com</p>
                </div>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={menuItems.map(
                        (item, index) => ({
                            key: String(index + 1),
                            icon: item.icons,
                            label: String(item.label),
                        }),
                    )}
                />
                <div style={wrapperStyle}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
            </Sider>
            <Layout>

                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 5,
                            minHeight: 500,
                            background: colorBgContainer,
                        }}
                    >

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkgreen", border: "2px solid darkgreen", borderRadius: "10px", margin: "15px", width: "300px", padding: "15px" }}>
                                <div>
                                    <h5>Total balance</h5>
                                    <h3>$2256</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <UsergroupAddOutlined style={{ fontSize: "40px" }} />

                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "yellow", border: "2px solid yellow", borderRadius: "10px", margin: "15px", width: "300px", padding: "15px" }}>
                                <div>
                                    <h5>Total sales</h5>
                                    <h3>24</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3144/3144573.png" height="40px" width="40px" />
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkgreen", border: "2px solid darkgreen", borderRadius: "10px", margin: "15px", width: "300px", padding: "15px" }}>
                                <div>
                                    <h5>Total expenses</h5>
                                    <h3>$12</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <CreditCardOutlined style={{ fontSize: "40px" }} />
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkblue", border: "2px solid darkblue", borderRadius: "10px", margin: "15px", width: "300px", padding: "15px" }}>
                                <div>
                                    <h5>Total visitors</h5>
                                    <h3>3</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <TeamOutlined style={{ fontSize: "40px" }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <div>
                                <div style={{ border: "1px solid", borderRadius: "8px", width: "550px", padding: "10px", height: "80px", margin: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <Space wrap>
                                            <Progress type="circle" percent={80} size={50} />
                                        </Space>
                                    </div>
                                    <div>
                                        <h6>Taylor Swift</h6>
                                        <p>24 April,2023 | 04:00 PM</p><br />
                                    </div>
                                    <div>
                                        <Rate disabled defaultValue={1} />
                                    </div>
                                    <div>
                                        <button class="button-2">2 days Left</button>
                                    </div>
                                </div>
                                <div style={{ border: "1px solid", borderRadius: "8px", width: "550px", padding: "10px", height: "80px", margin: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <Space wrap>
                                            <Progress type="circle" strokeColor="purple" percent={85} size={50} />
                                        </Space>
                                    </div>
                                    <div>
                                        <h6>Well Smith</h6>
                                        <p>24 April,2023 | 04:00 PM</p><br />
                                    </div>
                                    <div>
                                        <Rate disabled defaultValue={1} />
                                    </div>
                                    <div>
                                        <button class="button-2">5 days Left</button>
                                    </div>
                                </div>
                                <div style={{ border: "1px solid", borderRadius: "8px", width: "550px", padding: "10px", height: "80px", margin: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <Space wrap>
                                            <Progress type="circle" strokeColor="red" percent={68} size={50} />
                                        </Space>
                                    </div>
                                    <div>
                                        <h6>Johnson</h6>
                                        <p>24 April,2023 | 04:00 PM</p><br />
                                    </div>
                                    <div>
                                        <Rate disabled defaultValue={4} />
                                    </div>
                                    <div>
                                        <button class="button-2">8 days Left</button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <ShoppingCartOutlined style={{ fontSize: "40px" }} />
                                    </div>
                                    <div>
                                        <Progress percent={52} strokeColor="orange" style={{ width: "550px" }} /><br />Shopping
                                    </div>
                                </div><br />
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <BuildOutlined style={{ fontSize: "40px" }} />
                                    </div>
                                    <div>
                                        <Progress percent={21} strokeColor="orange" style={{ width: "550px" }} /><br />Electronics
                                    </div>
                                </div><br />
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <CarOutlined style={{ fontSize: "40px" }} />
                                    </div>
                                    <div>
                                        <Progress percent={74} strokeColor="black" style={{ width: "550px" }} /><br />Travels
                                    </div>
                                </div><br />
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <CarOutlined style={{ fontSize: "40px" }} />
                                    </div>
                                    <div>
                                        <Progress percent={74} strokeColor="orange" style={{ width: "550px" }} /><br />Travels
                                    </div>
                                </div><br />
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <CarOutlined style={{ fontSize: "40px" }} />
                                    </div>
                                    <div>
                                        <Progress percent={74} strokeColor="black" style={{ width: "550px" }} /><br />Travels
                                    </div>
                                </div><br />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01ABJa_0badJaDfqA0ImRCYcAIEKQcvW1dw&usqp=CAU" height="250px" width="750px" alt="image not found" style={{
                                    border: "1px solid ", borderRadius: "8px"
                                }} />
                            </div>
                            <div>
                                <ul style={{ listStyleType: "none" }}>
                                    <li><img src="https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG.jpg" height="60px" width="60px" />Google</li>
                                    <li><img src="https://cdn-icons-png.flaticon.com/512/4926/4926581.png" height="60px" width="60px" />Foursqure</li>
                                    <li><img src="https://cdn-icons-png.flaticon.com/512/1051/1051281.png" height="60px" width="60px" />Kickstarter</li>
                                    <li><img src="https://static.vecteezy.com/system/resources/previews/000/638/514/original/vector-talking-bubble-chat-icon.jpg" height="60px" width="60px" />Talk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Content>
                {/* <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer> */}
            </Layout>
        </Layout>
    );
};
export default Applayout;