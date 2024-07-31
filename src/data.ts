import {ICurrentSong, INavbar} from "./interfaces.ts";

export const navbar: INavbar = {
    title: "Playlist - foo",
};

export const SongList = {
    songBoxes: {
        data:
            [
                {id: 1, image: "src/assets/images/testImage.png", band: "The Nebula Navigators", song: "Ethereal Echoes", duration: 59},
                {id: 2, image: "src/assets/images/bild2.png", band: "Quantum Quirk Quartet", song: "Quantum Quiver", duration: 59},
                {id: 3, image: "src/assets/images/bild3.png", band: "Cosmic Cacophony Collective", song: "Nebulous Nightfall", duration: 59},
                {id: 4, image: "src/assets/images/bild4.png", band: "Galactic Groove Guild", song: "Galactic Glide", duration: 59},
                {id: 5, image: "src/assets/images/bild5.png", band: "Interstellar Impromptu Inc", song: "Interstellar Interlude", duration: 59},
                {id: 6, image: "src/assets/images/bild6.png", band: "Astrological Anomaly Alliance", song: "Astrological Afterglow", duration: 59},
                {id: 7, image: "src/assets/images/bild7.png", band: "Celestial Chorus Company", song: "Celestial Cadence", duration: 59},
                {id: 8, image: "src/assets/images/bild8.png", band: "Stellar Symphony Society", song: "Stellar Serenade", duration: 59},
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
