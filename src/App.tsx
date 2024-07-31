import {Navbar} from "./components/Header/Navbar.tsx";
import {Playlist} from "./components/Playlist/Playlist.tsx";
import {SongList} from "./data.ts";
import {CurrentSong} from "./components/SelectedSong/CurrentSong.tsx";
import {useState} from "react";

export function App() {
    const [currentSongId, setCurrentSongId] = useState<number>(1);
    return (
        <>
            <Navbar/>
            <div className={"content-container"}>
            <Playlist playlistBoxContainer={SongList.songBoxes} setCurrentSongId={setCurrentSongId} />
            <CurrentSong currentSongId={currentSongId}></CurrentSong>
            </div>
        </>
    );
}
