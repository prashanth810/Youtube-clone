import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../Data';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);
    const [pageToken, setPageToken] = useState(''); // Page token for pagination
    const [loading, setLoading] = useState(false);
    const loadRef = useRef();

    const fetchdetails = async (token = '') => {
        try {
            const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=10&regionCode=IN&videoCategoryId=${category}&pageToken=${token}&key=${API_KEY}`;

            const result = await fetch(videoList_url);
            if (!result.ok) {
                throw new Error(`HTTP error! status: ${result.status}`);
            }

            const res = await result.json();
            setPageToken(res.nextPageToken);
            if (res.items) {
                setData((prev) => [...prev, ...res.items]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Fetch the initial data when the component mounts or the category changes
        setData([]);
        setPageToken('');
        fetchdetails();
    }, [category]);

    const loadMore = useCallback(async () => {
        if (loading || !pageToken) return;
        setLoading(true);
        await fetchdetails(pageToken);
        setLoading(false);
    }, [pageToken, loading]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting && pageToken) {
                setTimeout(() => {
                    loadMore();
                }, 200);
            }
        });

        if (loadRef.current) {
            observer.observe(loadRef.current);
        }

        return () => {
            if (loadRef.current) {
                observer.unobserve(loadRef.current);
            }
        };
    }, [loadMore, pageToken]);

    return (
        <div className='feed_home'>
            {data.map((val, i) => (
                <Link to={`video/${val.snippet.categoryId}/${val.id}`} className='card' key={i}>
                    <img src={val.snippet.thumbnails.medium.url} alt='' />
                    <h2>{val.snippet.title}</h2>
                    <h3>{val.snippet.channelTitle}</h3>
                    <div className='d-flex justify-content-between'>
                        <p><FontAwesomeIcon icon={faEye} /> {value_converter(val.statistics.viewCount)} </p>
                        <p>  &bull; {moment(val.snippet.publishedAt).fromNow()}</p>
                    </div>
                </Link>
            ))}

            <div ref={loadRef}>
                {loading ? <div>Loading...</div> : ""}
            </div>
        </div>
    );
};

export default Feed;
