import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import SavedImages from '../components/SavedImages';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchBarResults';
import SearchInfo from '../components/SearchInfo';
import LoginButton from '../components/auth0/LoginButton';
import Profile from '../components/auth0/Profile';

const SearchView = () => {
    const { user, isAuthenticated } = useAuth0();
    const [links, setLinks] = useState<Array<string>>([]);
    const [searchData, setSearchData] = useState();
    const [imageLinks, setImageLinks] = useState<Array<string>>([]);

    if (!isAuthenticated) {
        return (
            <p>
                Please login <LoginButton />
            </p>
        );
    }

    function onButtonClick(e: any): void {
        throw new Error('Function not implemented.');
    }

    function addImageToList(link: string): void {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            <Profile />
            <SearchInfo searchInfo={searchData} />
            <SearchBar onSearchSubmit={onButtonClick} />
            <SearchResult links={links} addImageToList={addImageToList} />
            <SavedImages user={user!} imageLinks={imageLinks} />
        </>
    );
};

export default SearchView;
