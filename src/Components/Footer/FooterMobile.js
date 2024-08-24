import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faHouse, faPlus, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';



const FooterMobile = ({ category, setCtaegory }) => {

    return (
        <div className='footer_footer_home'>
            <div className='container'>
                <div className='row' style={{ zIndex: '100' }}>
                    <div className='footer_home-footer'>
                        <div
                            className={`footer_home_icons ${category === 0 ? "active" : ""}`}
                            onClick={() => setCtaegory(0)}
                        >
                            <FontAwesomeIcon icon={faHouse} />
                            <p
                                className={`footer_home-footer_para ${category === 0 ? "active-border" : ""}`}
                            >
                                Home
                            </p>
                        </div>

                        <div
                            className={`footer_home_icons ${category === 20 ? "active" : ""}`}
                            onClick={() => setCtaegory(20)}
                        >
                            <FontAwesomeIcon icon={faVideo} />
                            <p
                                className={`footer_home-footer_para ${category === 20 ? "active-border" : ""}`}
                            >
                                Shorts
                            </p>
                        </div>

                        <div className='footer_home_icons'>
                            <FontAwesomeIcon icon={faPlus} />
                            <p className='footer_home-footer_para'>Upload</p>
                        </div>

                        <div
                            className={`footer_home_icons ${category === 10 ? "active" : ""}`}
                            onClick={() => setCtaegory(10)}
                        >
                            <FontAwesomeIcon icon={faDisplay} />
                            <p
                                className={`footer_home-footer_para ${category === 10 ? "active-border" : ""}`}
                            >
                                Subscriptions
                            </p>
                        </div>

                        <div className='footer_home_icons'>
                            <FontAwesomeIcon icon={faUser} />
                            <p className='footer_home-footer_para'>You</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FooterMobile
