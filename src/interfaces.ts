export interface INavbar
{
    title: string;
}
export interface IPlaylistBoxContainer
{
    data: IPlaylistBox[];
}
export interface IPlaylistBox
{
    id: number;
    image: string;
    band: string;
    song: string;
}
export interface ICurrentSong
{
    id: number;
    image: string;
    band: string;
    song: string;

}

