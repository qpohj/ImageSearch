import { useState } from "react"

type SearchBarProps = {
    onSearchSubmit: (e:any) => void;
}


// textfield + button for searching in api
const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit }) => {

    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (event: any) => {
        setSearchInput(event.target.value);
    };

    const handleButtonClick = () => {
        onSearchSubmit(searchInput)
    };

    return (
        <> 
            <input
                type="text"
                value={searchInput}
                onChange={handleSearchInput}
            />
            <button onClick={handleButtonClick}>Search</button>
            {/* {response.spelling && <span onClick={()=>{}}>Did you mean?{response.correctedQuery}?</span>} */}
        </>
    )
}
export default SearchBar;