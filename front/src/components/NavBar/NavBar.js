import './NavBar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// AntDesign
import { Button, Drawer } from 'antd';
import { AlignRightOutlined } from '@ant-design/icons';

// Composants du menu
import LeftMenu from './sections/LeftMenu';
import RightMenu from './sections/RightMenu';

function NavBar() {

    // Gestion de la visibilité du Drawer
    const [visible, setVisible] = useState(false);
    const showDrawer = () => { setVisible(true) };
    const onClose = () => { setVisible(false) };

    return (
        <nav className="menu">
            <div className="menu-logo">
                <Link to='/' className='logo-link' >Skillzy-dev</Link>
            </div>
            <div className="menu__container">
                <div className='left-menu wide-screen'>
                    <LeftMenu mode='horizontal' />
                </div>
                <div className="right-menu wide-screen">
                    <RightMenu mode="horizontal" />
                </div>
    
                {/* Bouton de visibilité du Drawer, visible en small screen */}
                <Button
                    className="resp-menu-toggler"
                    type="primary"
                    onClick={showDrawer}
                    >
                    <AlignRightOutlined />
                </Button>

                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    className="resp-menu-drawer"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <LeftMenu mode="inline" />
                    <RightMenu mode="inline" />
                </Drawer>
            </div>
        </nav>
    )
}

export default withRouter(NavBar);
