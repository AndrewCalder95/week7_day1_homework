const Releases = ({ name, url }) => {
    return (
        <>
            <ul>
            <li> <a href={url}>{name}</a> </li>
            </ul>
        </>
    );
}

export default Releases;