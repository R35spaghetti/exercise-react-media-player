import {ReactElement} from "react";

export function Player(): ReactElement {
    return (
        <div className="player-panel">
            <span className="material-symbols-outlined">repeat_on</span>
            <span className="material-symbols-outlined">fast_rewind</span>
            <span className="material-symbols-outlined">play_circle</span>
            <span className="material-symbols-outlined">fast_forward</span>
            <span className="material-symbols-outlined">shuffle</span>
        </div>

    )
}