import React, { useState } from 'react';
import ReleasesList from "../components/ReleasesList";

const ReleaseBox = () => {

    const [releases, setReleases] = useState([
        {
            id: 1,
            name: "Spiderman: No Way Home",
            url: "https://www.imdb.com/title/tt10872600/"
        },
        {
            id: 2,
            name: "Clifford the Big Red Dog",
            url: "https://www.imdb.com/title/tt2397461/?ref_=rlm"
        },
        {
            id: 3,
            name: "West Side Story",
            url: "https://www.imdb.com/title/tt3581652/?ref_=rlm"
        },
        {
            id: 4,
            name: "Matrix: Resurrections",
            url: "https://www.imdb.com/title/tt10838180/?ref_=rlm"
        }
    ]);

    return (
    <>
            <div id="releases">
            <h3>Upcoming Film Releases for the UK</h3>
            <hr></hr>
            <ReleasesList releases={releases} />
            <hr></hr>
            <footer>
                <form action="https://www.imdb.com/calendar/?region=gb">
                    <button type="submit">View More Upcoming Releases >> </button>
                </form>
            </footer>
            </div>
    </>
        )
}

export default ReleaseBox;