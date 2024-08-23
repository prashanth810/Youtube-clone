import React from 'react'
import Playvideo from '../Components/playvideo/Playvideo';
import './Videohome.css';
import Recomended from '../Components/recomended/Recomended';
import { useParams } from 'react-router-dom';

const Videohome = () => {
    const { videoId, categoryId } = useParams();

    return (
        <div className='vide_home play-container'>
            <Playvideo videoId={videoId} />
            <Recomended categoryId={categoryId} />
        </div>
    )
}

export default Videohome
