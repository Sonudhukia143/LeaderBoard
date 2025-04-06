import { Outlet } from "react-router-dom";
import { TopPlayers } from "./Top3.jsx";
import { users } from "../utils/player.js";

export default function Layout() {
    const top3 = users.slice(0, 3);

    return (
        <>
            <header>
                <TopPlayers top3={top3} />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© 2025 3W Buisness Submission. All rights reserved.</p>
            </footer>
        </>
    );
}