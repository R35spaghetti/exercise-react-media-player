import {ICurrentSong, INavbar} from "./interfaces.ts";

export const navbar: INavbar = {
    title: "Playlist",
};

export const SongList = {
    songBoxes: {
        data:
            [
                {id: 1, image: "img", band: "band", song: "sång", duration: 59},
                {id: 2, image: "img", band: "band nummer två", song: "sången", duration: 59},
                {id: 3, image: "img", band: "band", song: "sång", duration: 59},
                {id: 4, image: "img", band: "bandet", song: "sången", duration: 59},
                {id: 5, image: "img", band: "band", song: "sång", duration: 59},
                {id: 6, image: "img", band: "bandet", song: "sången", duration: 59},
                {id: 7, image: "img", band: "band", song: "sång", duration: 59},
                {id: 8, image: "img", band: "bandet", song: "sången", duration: 59},
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
            duration: targetSong.duration,
        });
    }
}
