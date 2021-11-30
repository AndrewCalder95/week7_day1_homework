import Releases from "./Releases"

const ReleasesList = ({ releases }) => {

    const releasesNodes = releases.map(release => {
        return <Releases name={release.name} key={release.id} url={release.url}></Releases>
    })
    return (
        <>
            {releasesNodes}
        </>
    )
}

export default ReleasesList;