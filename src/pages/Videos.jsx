import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Videos() {
    const [VideoId, setVideoId] = useState('');

    const navigate = useNavigate();

    const handleChange = e => {
        setVideoId(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setVideoId('');
        navigate(`/videos/${VideoId}`);
    };

    return (
        <div>
            <h1>Videos~!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={VideoId}
                    placeholder="Video Id"
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}
