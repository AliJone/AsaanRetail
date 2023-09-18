import { Button, Layout, Menu } from 'antd';

const { Header } = Layout;


const NavigationBar = () => {

    return(
        <Layout>
            <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Products</Menu.Item>
                    <Menu.Item key="3">About</Menu.Item>
                    <Menu.Item key="4">Contact</Menu.Item>
                </Menu>
                <Button type="primary" shape="round" size="large">
                    Login
                </Button>
                
            </Header>
        </Layout>
    )

}

export default NavigationBar;