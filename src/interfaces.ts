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
    band: string;
    song: string;
}