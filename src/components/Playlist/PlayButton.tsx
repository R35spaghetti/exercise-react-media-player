import {ReactElement} from "react";

export function PlayButton({onClick}: { onClick: () => void }): ReactElement {
    return (
        <span className="material-symbols-outlined" onClick={onClick}>play_circle</span>
    );
}