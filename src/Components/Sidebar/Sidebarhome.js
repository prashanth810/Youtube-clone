import React from 'react';
import './Sidebar.css';
import home from '../../images/home.png';
import game_icon from '../../images/game_icon.png';
import autmobiles from '../../images/automobiles.png';
import sports from '../../images/sports.png';
import entertainment from '../../images/entertainment.png';
import tech from '../../images/tech.png';
import music from '../../images/music.png';
import blogs from '../../images/blogs.png';
import news from '../../images/news.png';
import jack from '../../images/jack.png';
import simon from '../../images/simon.png';
import megan from '../../images/megan.png';
import cameron from '../../images/cameron.png';
import tom from '../../images/tom.png';

const Sidebarhome = ({ sidebar, category, setCtaegory }) => {
    return (
        <div className={`side_ome_bar sidebar_home ${sidebar ? "" : "small-sidebar"}`} >
            <div className='sortcut-links'>
                <div className={`side-links ${category === 0 ? "active" : ""}`} onClick={() => setCtaegory(0)}>
                    <img src={home} alt='' />
                    <p>Home</p>
                </div>
                <div className={`side-links ${category === 20 ? "active" : ""}`} onClick={() => setCtaegory(20)}>
                    <img src={game_icon} alt='' />
                    <p>Gaming</p>
                </div>
                <div className={`side-links ${category === 2 ? "active" : ""}`} onClick={() => setCtaegory(2)}>
                    <img src={autmobiles} alt='' />
                    <p>Automobiles</p>
                </div>
                <div className={`side-links ${category === 17 ? "active" : ""}`} onClick={() => setCtaegory(17)}>
                    <img src={sports} alt='' />
                    <p>Sports </p>
                </div>
                <div className={`side-links ${category === 24 ? "active" : ""}`} onClick={() => setCtaegory(24)}>
                    <img src={entertainment} alt='' />
                    <p>Entertainment</p>
                </div>
                <div className={`side-links ${category === 24 ? "active" : ""}`} onClick={() => setCtaegory(28)}>
                    <img src={tech} alt='' />
                    <p>Tech</p>
                </div>
                <div className={`side-links ${category === 10 ? "active" : ""}`} onClick={() => setCtaegory(10)}>
                    <img src={music} alt='' />
                    <p>Music  </p>
                </div>
                <div className={`side-links ${category === 22 ? "active" : ""}`} onClick={() => setCtaegory(22)}>
                    <img src={blogs} alt='' />
                    <p>Blogs</p>
                </div>
                <div className={`side-links ${category === 25 ? "active" : ""}`} onClick={() => setCtaegory(25)}>
                    <img src={news} alt='' />
                    <p>News</p>
                </div>
                <hr />
            </div>

            <div className='subscribe-list'>
                <h3> Subscribe </h3>
                <div className='side-link'>
                    <img src={jack} alt='jack' />
                    <p> PewDiepie</p>
                </div>
                <div className='side-link'>
                    <img src={simon} alt='jack' />
                    <p> Mester beast </p>
                </div>
                <div className='side-link'>
                    <img src={tom} alt='jack' />
                    <p> Tom </p>
                </div>
                <div className='side-link'>
                    <img src={megan} alt='jack' />
                    <p> 5 minu...</p>
                </div>
                <div className='side-link'>
                    <img src={cameron} alt='jack' />
                    <p> Hyderabad </p>
                </div>
            </div>

        </div>
    )
}

export default Sidebarhome
