type SearchResultProps = {
    links : Array<string>
}

const SearchResult: React.FC<SearchResultProps> = ({ links }) => {
    
    // return json data - link: from google api call.
    return (
        <div>
            {links.map(link => {
                return (
                    <>
                        <img src={link} width={200} height={200} />
                    </>
                )
            })}
        </div>   
    )
}

export default SearchResult;