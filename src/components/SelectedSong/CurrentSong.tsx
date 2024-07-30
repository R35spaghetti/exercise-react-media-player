import {AddButton} from "./AddButton.tsx";
import {FavoriteButton} from "./FavoriteButton.tsx";
import {useEffect, useState} from 'react';
import {SetCurrentSongInfo} from "../../data.ts";
import {Player} from "./Player.tsx";
import {AudioPlayer} from "./AudioProgress.tsx";
import "./CurrentSong.css"

export function CurrentSong({currentSongId}: { currentSongId: number }) {
    const [currentSong, setCurrentSong] = useState({
        id: 0,
        image: "",
        band: "",
        song: "",
        duration: 0,
    });

    useEffect(() => {
        SetCurrentSongInfo(setCurrentSong, {id: currentSongId});
    }, [currentSongId]);
    return (
        <div className="current-song-playing-container">
            <div className="selected-song-container">
                {currentSong.image &&
                    <img src={currentSong.image} alt={currentSong.band} className="current-song-image"/>}
                <div className="selected-song-content">
                    <AddButton/>
                    <p><strong>{currentSong.band}</strong> <br/>
                        {currentSong.song}</p>
                    <FavoriteButton/>
                </div>
            </div>
            <div className="current-song-progress">
                <p>00:00</p>
                <AudioPlayer/>
                <p>00:{currentSong.duration}</p>
            </div>
            <Player/>
        </div>
    );
}
