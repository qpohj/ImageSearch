const SearchInfo = ({ searchInfo }:any) => {
    // Info like search time and if spelling was correct etc.
    

    return (
        <>
            <p>SearchTime: {searchInfo?.formattedSearchTime}</p>
            <p>Total Results: {searchInfo?.formattedTotalResults}</p>
        </>
    )
}

export default SearchInfo;