import {Navbar} from "./components/Header/Navbar.tsx";
import {Playlist} from "./components/Playlist/Playlist.tsx";
import {SongList} from "./data.ts";
import {CurrentSong} from "./components/SelectedSong/CurrentSong.tsx";

export function App() {
    return (
        <>
            <Navbar/>
            <Playlist playlistBoxContainer={SongList.songBoxes}/>
            <CurrentSong currentSongId={1}></CurrentSong>
        </>
    );
}
