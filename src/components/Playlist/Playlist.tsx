import {ReactElement} from "react";
import {IPlaylistBoxContainer} from "../../interfaces.ts";
import {PlayButton} from "./PlayButton.tsx";
import "./Playlist.css"

interface IPlaylistProps {
    playlistBoxContainer: IPlaylistBoxContainer;
}

export function Playlist({playlistBoxContainer}: IPlaylistProps): ReactElement {
    return (
        <div className="playlist-container">
            {playlistBoxContainer.data.map((playlistBox) => (
                <p className="column" key={playlistBox.id}>
                    <span><img src={playlistBox.image} alt={playlistBox.band} className="column-image"/></span>
                    <span>{playlistBox.band} <br/>
                        {playlistBox.song}</span>
                    <PlayButton/>
                </p>
            ))}
        </div>
    )
}