import React, { useEffect, useState } from 'react';
import './Recomended.css';
import { API_KEY, value_converter } from '../../Data';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Recomended = ({ categoryId }) => {
    const [apirecommended, setApiRecommended] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const fetchdata = async () => {
        const relatedvideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

        await fetch(relatedvideo_url)
            .then((res) => res.json())
            .then((result) => {
                setApiRecommended(result.items);
            });
    };

    useEffect(() => {
        fetchdata();
    }, []);

    // Function to handle showing more or less videos
    const handleShowMore = () => {
        setShowAll(!showAll);
    };

    return (
        <div className='recomended'>
            {apirecommended && apirecommended.slice(0, showAll ? apirecommended.length : 6).map((val, i) => {
                return (
                    <Link to={`/video/${val.categoryId}/${val.id}`} className='side-video-list' key={i}>
                        <img src={val.snippet.thumbnails.medium.url} alt='thumbnail' />
                        <div className='vid-info'>
                            <h4> {val.snippet.title}  </h4>
                            <p>{val.snippet.channelTitle}</p>
                            <p> {value_converter(val.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                );
            })}
            {apirecommended.length > 6 && (
                <div className='show-more' onClick={handleShowMore}>
                    <FontAwesomeIcon icon={faAngleDown} />
                    <span>{showAll ? 'Show Less' : 'Show More'}</span>
                </div>
            )}
        </div>
    );
};

export default Recomended;
