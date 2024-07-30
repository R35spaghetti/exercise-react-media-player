import {AddButton} from "./AddButton.tsx";
import {FavoriteButton} from "./FavoriteButton.tsx";
import {useEffect, useState} from 'react';
import {SetCurrentSongInfo} from "../../data.ts";
import {Player} from "./Player.tsx";
import {AudioPlayer} from "./AudioProgress.tsx";

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
            {currentSong.image && <img src={currentSong.image} alt={currentSong.band}/>}
            <AddButton/>
            <p>{currentSong.band}</p>
            <p>{currentSong.song}</p>
            <FavoriteButton/>
            <p>00:00</p>
            <AudioPlayer/>
            <p>00:{currentSong.duration}</p>
            <Player/>
        </div>
    );
}
