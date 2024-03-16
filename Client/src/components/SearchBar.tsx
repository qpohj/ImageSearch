import { useState } from "react"


// textfield + button for searching in api
const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    };

    const handleButtonClick = () => {
        console.log(searchInput);
    };

    return (
        <>
            <input
                type="text"
                value={searchInput}
                onChange={handleSearchInput}
                placeholder="Enter text here"
            />
            <button onClick={handleButtonClick}>Search</button>
        </>
    )
}

export default SearchBar;