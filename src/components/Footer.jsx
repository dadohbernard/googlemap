import React from 'react';
import '../assets/css/FooterCss.css';
import { FaHeart, FaInfoCircle, FaBell } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">
            <IconWrapper icon={<FaHeart color="white" size={20} />} />
            <IconWrapper icon={<FaInfoCircle color="white" size={20} />} />
            <IconWrapper icon={<FaBell color="white" size={20} />} />
        </div>
    );
}

function IconWrapper({ icon }) {
    return <div>{icon}</div>;
}

export default Footer;
