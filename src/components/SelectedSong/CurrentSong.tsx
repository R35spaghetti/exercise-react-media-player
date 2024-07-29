import {AddButton} from "./AddButton.tsx";
import {FavoriteButton} from "./FavoriteButton.tsx";
import {useEffect, useState} from 'react';
import {SetCurrentSongInfo} from "../../data.ts";

export function CurrentSong({currentSongId}: { currentSongId: number }) {
    const [currentSong, setCurrentSong] = useState({
        id: 0,
        image: "",
        band: "",
        song: "",
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
        </div>
    );
}
