import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className='icons'>
                <div className='icon'>
                    <a href="https://github.com/lcscostadev/React-ToDoList" target="_blank">
                        <ion-icon name="logo-github" size="large"></ion-icon>
                    </a>
                </div>
                <div className='icon'>
                    <a href="https://twitter.com/lcscostadev" target="_blank">
                        <ion-icon name="logo-twitter" size="large"></ion-icon>
                    </a>
                </div>
                <div className='icon'>
                    <a href="https://www.linkedin.com/in/lcscostadev/" target="_blank">
                        <ion-icon name="logo-linkedin" size="large"></ion-icon>
                    </a>
                </div>
                <div className='icon'>
                    <a href="https://www.instagram.com/lcscostaa/" target="_blank">
                        <ion-icon name="logo-instagram" size="large"></ion-icon>
                    </a>
                </div>
                <div className='icon'>
                    <a href="https://www.youtube.com/channel/UC34-Ya9LsJ6GCgIlpMJYvUQ" target="_blank">
                        <ion-icon name="logo-youtube" size="large"></ion-icon>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;