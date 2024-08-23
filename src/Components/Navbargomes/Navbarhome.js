import React, { useEffect, useState } from 'react';
import './Nav.css';
import menuicon from '../../images/menu.png';
import logo from '../../images/logo.png';
import searchicon from '../../images/search.png';
import upload_icon from '../../images/upload.png';
import more_icons from '../../images/more.png';
import notification_icon from '../../images/notification.png';
import profile_icon from '../../images/jack.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbarhome = ({ setSidebar }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light-theme';
    });

    // Function to handle theme toggle
    const themehandler = () => {
        const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save the new theme to localStorage
    };

    // Apply the theme to the body class whenever it changes
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className='navbar_home'>
            <nav className='flex-div'>
                <div className='nav-left flex-div'>
                    <img className='menu_icon' src={menuicon} alt={'menu_icons'} onClick={() => setSidebar((prev) => !prev)} />

                    <Link to='/'>
                        <img className='logo' x src={logo} alt={"menu_icon"} />

                        {/* <FontAwesomeIcon icon={faYoutube} className='logo' /> */}
                    </Link>
                </div>

                <div className='nav-middle flex-div'>
                    <div className='search-box flex-div'>
                        <input type='text' placeholder='Search...' />
                        <img src={searchicon} alt='search icon' />
                    </div>
                </div>

                <div className='nav-right flex-div'>
                    <img src={upload_icon} alt='upload icon' />
                    <img src={more_icons} alt='more icons' />
                    <img src={notification_icon} alt='notification icon' />
                    <img src={profile_icon} className='user_icon' alt='profile icon' />

                    <FontAwesomeIcon
                        icon={theme === 'light-theme' ? faMoon : faSun}
                        size="xl"
                        style={{ color: theme === 'light-theme' ? 'black' : 'white' }}
                        onClick={themehandler} />
                </div>
            </nav>
        </div>
    )
}

export default Navbarhome;
