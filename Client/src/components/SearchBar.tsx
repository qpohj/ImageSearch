import { useState } from "react"

type SearchBarProps = {
    onSubmit: (e:any) => void;
}


// textfield + button for searching in api
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {

    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (event: any) => {
        setSearchInput(event.target.value);
    };

    const handleButtonClick = async () => {
        onSubmit(searchInput)
    };

    return (
        <> 
            <input
                type="text"
                value={searchInput}
                onChange={handleSearchInput}
            />
            <button onClick={handleButtonClick}>Search</button>
        </>
    )
}
export default SearchBar;