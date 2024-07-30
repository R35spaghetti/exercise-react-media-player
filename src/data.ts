import {ICurrentSong, INavbar} from "./interfaces.ts";

export const navbar: INavbar = {
    title: "Playlist - foo",
};

export const SongList = {
    songBoxes: {
        data:
            [
                {id: 1, image: "src/assets/images/testImage.png", band: "band", song: "sång", duration: 59},
                {id: 2, image: "src/assets/images/testImage.png", band: "band nummer två", song: "sången", duration: 59},
                {id: 3, image: "src/assets/images/testImage.png", band: "band", song: "sång", duration: 59},
                {id: 4, image: "src/assets/images/testImage.png", band: "bandet", song: "sången", duration: 59},
                {id: 5, image: "src/assets/images/testImage.png", band: "band", song: "sång", duration: 59},
                {id: 6, image: "src/assets/images/testImage.png", band: "bandet", song: "sången", duration: 59},
                {id: 7, image: "src/assets/images/testImage.png", band: "band", song: "sång", duration: 59},
                {id: 8, image: "src/assets/images/testImage.png", band: "bandet", song: "sången", duration: 59},
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
