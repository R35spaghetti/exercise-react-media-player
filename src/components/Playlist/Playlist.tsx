import {ReactElement} from "react";
import {IPlaylistBoxContainer} from "../../interfaces.ts";
import {PlayButton} from "./PlayButton.tsx";


interface IPlaylistProps {
    playlistBoxContainer: IPlaylistBoxContainer;
}

export function Playlist({playlistBoxContainer}: IPlaylistProps): ReactElement {
    return (
        <div className="playlist-box">
            {playlistBoxContainer.data.map((playlistBox) => (
                <p className="column" key={playlistBox.id}>
                    <span>{playlistBox.image}</span>
                    <span>{playlistBox.band}</span>
                    <span>{playlistBox.song}</span>
                    <PlayButton/>
                </p>
            ))}
        </div>
    )
}