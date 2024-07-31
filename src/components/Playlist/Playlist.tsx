import {ReactElement} from "react";
import {IPlaylistBoxContainer} from "../../interfaces.ts";
import {PlayButton} from "./PlayButton.tsx";
import "./Playlist.css"

interface IPlaylistProps {
    playlistBoxContainer: IPlaylistBoxContainer;
    setCurrentSongId: (id: number) => void;
}

export function Playlist({playlistBoxContainer, setCurrentSongId}: IPlaylistProps): ReactElement {
    const playButtonClick = (songId: number) =>
    {
        setCurrentSongId(songId);
    }
    return (
        <div className="playlist-container">
            {playlistBoxContainer.data.map((playlistBox) => (
                <p className="column" key={playlistBox.id}>
                    <span><img src={playlistBox.image} alt={playlistBox.band} className="column-image"/></span>
                    <span>{playlistBox.band} <br/>
                        {playlistBox.song}</span>
                    <PlayButton onClick={() => playButtonClick(playlistBox.id)}/>
                </p>
            ))}
        </div>
    )
}