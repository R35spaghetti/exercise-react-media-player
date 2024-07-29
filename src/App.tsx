import {Navbar} from "./components/Header/Navbar.tsx";
import {Playlist} from "./components/Playlist/Playlist.tsx";
import {SongList} from "./data.ts";

export function App() {
    return (
        <>
            <Navbar/>
            <Playlist playlistBoxContainer={SongList.songBoxes}/>
        </>
    );
}
