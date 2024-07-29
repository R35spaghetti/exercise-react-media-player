import {ICurrentSong, INavbar} from "./interfaces.ts";

export const navbar: INavbar = {
    title: "Playlist",
};

export const SongList = {
    songBoxes: {
        data:
            [
                {id: 1, image: "img", band: "band", song: "sång",},
                {id: 2, image: "img", band: "band nummer två", song: "sången",},
                {id: 3, image: "img", band: "band", song: "sång",},
                {id: 4, image: "img", band: "bandet", song: "sången",},
                {id: 5, image: "img", band: "band", song: "sång",},
                {id: 6, image: "img", band: "bandet", song: "sången",},
                {id: 7, image: "img", band: "band", song: "sång",},
                {id: 8, image: "img", band: "bandet", song: "sången",},
            ]
    }
}

export function SetCurrentSongInfo(setCurrentSong: (song: ICurrentSong) => void, {id}: { id: number }) {
    const targetSong = SongList.songBoxes.data.find(song => song.id === id);
    if (targetSong) {
        setCurrentSong({
            id: targetSong.id,
            image: targetSong.image,
            band: targetSong.band,
            song: targetSong.song,
        });
    }
}
