import React, { useState } from 'react';
import './Youtube.css';
import Sidebarhome from '../Components/Sidebar/Sidebarhome';
import Feed from '../Components/Fedd/Feed';
import FooterMobile from '../Components/Footer/FooterMobile';

const Youtubehome = ({ sidebar }) => {
    const [category, setCtaegory] = useState(0);


    return (
        <>
            <Sidebarhome sidebar={sidebar} category={category} setCtaegory={setCtaegory} />

            <div className={`container ${sidebar ? "" : "large-container"}`}>
                <Feed sidebar={sidebar} category={category} />
                <FooterMobile category={category} setCtaegory={setCtaegory} />
            </div>

        </>
    )
}

export default Youtubehome;
