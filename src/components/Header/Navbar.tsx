import {ReactElement} from "react";
import {BackArrow} from "./BackArrow.tsx";
import {navbar} from "../../data.ts";
import {HamburgerMenu} from "./HamburgerMenu.tsx";



export function Navbar(): ReactElement
{ return (
    <header className="navBar">
        <BackArrow/>
        {navbar.title}
        <HamburgerMenu/>
    </header>
)

}