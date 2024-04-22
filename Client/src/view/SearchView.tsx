import Navbar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchBarResults';
import SearchInfo from '../components/SearchInfo';

const SearchView = () => {
    return (
        <div>
            <Navbar />
            <p>SearchView</p>
            <SearchBar onSearchSubmit={function (e: any): void {
                throw new Error('Function not implemented.');
            } } />
            <SearchInfo />
            <SearchResult links={[]} addImageToList={function (link: string): void {
                throw new Error('Function not implemented.');
            } }/>
        </div>
    );
};

export default SearchView;
