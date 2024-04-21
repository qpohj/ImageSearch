import { SetStateAction, useState } from 'react';

type SearchBarProps = {
    onSearchSubmit: (e: any) => void;
};

// textfield + button for searching in api
const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (event: any) => {
        setSearchInput(event.target.value);
    };

    const handleButtonClick = () => {
        onSearchSubmit(searchInput);
    };
    // moved from app.tsx
    const onButtonClick = (searchInput: any) => {
        fetch(`http://localhost:3000?searchQuery=${searchInput}`)
            .then((res) => res.json())
            .then((data: any) => {
                console.log(data.searchData);
                setLinks(data.pictures);
                setSearchData(data.searchData);
            });
    };

    return (
        <>
            <input type="text" onChange={handleSearchInput} />
            <button onClick={handleButtonClick}>Search</button>
            {/* {response.spelling && <span onClick={()=>{}}>Did you mean?{response.correctedQuery}?</span>} */}
        </>
    );
};
export default SearchBar;
