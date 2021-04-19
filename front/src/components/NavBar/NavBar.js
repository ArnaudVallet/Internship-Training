import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

function NavBar() {
    return (
        <>
            <Layout>
                <Header>
                <div className="menu__logo">
                <Link to="/">Skillzy-dev</Link>
                <a href="/">Skillzy-dev</a>
                </div>
                </Header>
            </Layout>
        </>
    )
}

export default NavBar;
