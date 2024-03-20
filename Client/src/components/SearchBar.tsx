import { SetStateAction, useState } from "react"


// textfield + button for searching in api
const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchInput(event.target.value);
    };

    const handleButtonClick = () => {
        // when clicked submit 
    };

    return (
        <>
            <input
                type="text"
                onChange={handleSearchInput}
            />
            <button onClick={handleButtonClick}>Search</button>
        </>
    )
}

export default SearchBar;