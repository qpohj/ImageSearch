import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import './App.css'
import SavedImages from './components/SavedImages'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchBarResults'
import SearchInfo from './components/SearchInfo'
import LoginButton from './components/auth0/LoginButton'
import LogoutButton from './components/auth0/LogoutButton'
import Profile from './components/auth0/Profile'

const App = () => {
  const { user, isAuthenticated } = useAuth0();
  const [links, setLinks] = useState<Array<string>>([]);
  const [searchData, setSearchData] = useState(); 
  const [imageLinks, setImageLinks] = useState<Array<string>>([]);

  

  const onButtonClick = (searchInput: any) => {
    
    fetch(`http://localhost:3000/api/search?searchQuery=${searchInput}`)
      .then(res => res.json())
      .then((data : any) => {
        console.log(data.searchData)
        setLinks(data.pictures)
        setSearchData(data.searchData)
      })
  }

  const addImageToList = (link: string) => {      
    setImageLinks(old => [...old, link]);
  }

  if (!isAuthenticated)
  {
    return <p>
      Please login <LoginButton/>
    </p>
    }

  return (
    <>
      <Profile/>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <SearchInfo searchInfo={searchData} />
      <SearchBar onSearchSubmit={onButtonClick} />
      <SearchResult links={links} addImageToList={addImageToList} />
      <SavedImages user={user!} imageLinks={imageLinks} />   
  </>
  )
}

export default App