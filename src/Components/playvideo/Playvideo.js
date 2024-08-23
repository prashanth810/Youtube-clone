import React, { useEffect, useState } from 'react';
import './Play.css';
import like from '../../images/like.png';
import dislike from '../../images/dislike.png';
import share from '../../images/share.png';
import save from '../../images/save.png';
import jack from '../../images/jack.png';
import user_prfile from '../../images/user_profile.jpg';
import { API_KEY, value_converter } from '../../Data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const Playvideo = () => {
    const [subscribe, setSubscribe] = useState(() => {
        return localStorage.getItem("subscribe") || "Subscribe";
    });

    // Function to handle subscribe/unsubscribe action
    const handlesubscribe = () => {
        const newSubscribeState = subscribe === "Subscribe" ? "Unsubscribe" : "Subscribe";
        setSubscribe(newSubscribeState);
        localStorage.setItem("subscribe", newSubscribeState); // Save to localStorage
    };


    const [apidata, setApiData] = useState(null);
    const [channeldata, setChanneldata] = useState(null);
    const [commentdata, setCommentdata] = useState([]);
    const { videoId } = useParams();

    const fetchvideodata = async () => {
        const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

        await fetch(video_url)
            .then((res) => res.json())
            .then((result) => {
                setApiData(result.items[0]);
            });
    };

    const fetchotherdata = async () => {
        const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&maxResults=100&key=${API_KEY}`;

        await fetch(channel_url)
            .then((res) => res.json())
            .then((result) => {
                setChanneldata(result.items[0]);
            });

        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

        await fetch(comment_url)
            .then((res) => res.json())
            .then((resp) => {
                setCommentdata(resp.items);
            });
    };

    useEffect(() => {
        fetchvideodata();
    }, [videoId]);

    useEffect(() => {
        if (apidata) fetchotherdata();
    }, [apidata]);

    if (!apidata) {
        return <div>Loading...</div>;
    };


    return (
        <div className='play-video'>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <h3> {apidata.snippet.title} </h3>
            <div className='play-video-info'>
                <p> {apidata ? value_converter(apidata.statistics.viewCount) : "16K"} views &bull; {apidata ? `Published: ${moment(apidata.snippet.publishedAt).fromNow()}` : "Loading..."} </p>
                <div>
                    <span><img src={like} alt='like' />{value_converter(apidata.statistics.likeCount)}</span>
                    <span><img src={dislike} alt='dislike' /></span>
                    <span><img src={share} alt='share' />Share</span>
                    <span><img src={save} alt='save' />Save</span>
                </div>
            </div>
            <hr />
            <div className='publisher'>
                <img src={channeldata ? channeldata.snippet.thumbnails.default.url : ""} alt='channel thumbnail' />
                <div>
                    <p>{apidata.snippet.channelTitle}</p>
                    <p style={{ fontWeight: '500', fontSize: '13px' }}>{channeldata ? value_converter(channeldata.statistics.subscriberCount) : "Not Available"} Subscribers </p>
                </div>

                <button
                    className={`subscribe-button ${subscribe === "Unsubscribe" ? "active" : ""}`}
                    onClick={handlesubscribe}
                >
                    {subscribe}
                </button>

            </div>
            <div className='vid-description'>
                <p>{apidata ? apidata.snippet.description.slice(0, 400) : "No Data Available"}</p>
                <hr />
                <h4>{apidata ? value_converter(apidata.statistics.commentCount) : "No comments"} Comment's</h4>

                {commentdata && commentdata.map((val, i) => {
                    return (
                        <div className='comment' key={i}>
                            <img src={val.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='user' />
                            <div>
                                <h3>{val.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                                <p>{val.snippet.topLevelComment.snippet.textDisplay} </p>

                                <div className='comment-action'>
                                    <img src={like} alt='like' />
                                    <span>{value_converter(val.snippet.topLevelComment.snippet.likeCount)} </span>
                                    <img src={dislike} alt='dislike' />
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Playvideo;
