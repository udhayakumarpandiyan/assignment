import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Select, Menu } from 'antd';
import 'antd/dist/antd.css';
const Option = Select.Option;


const Header = (props) => {
    
    const ProfileMenu = (
        <Menu>
            <Menu.Item>
                <Link className="dropdown-item-link">My Profile</Link>
            </Menu.Item>
            <Menu.Item>
                <Link className="dropdown-item-link">Edit Profile</Link>
            </Menu.Item>
            <Menu.Item>
                <Link className="dropdown-item-link">Logout</Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="header">
           
        </div>
    )
}
export default Header;