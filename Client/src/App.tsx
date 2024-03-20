import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchBarResults'
import Profile from './components/Profile'
import SearchInfo from './components/SearchInfo'

const App = () => {
  const { isAuthenticated } = useAuth0();
  const [links, setLinks] = useState<Array<string>>([]);
  const [searchData, setSearchData] = useState();

  const onButtonClick = async (searchInput:any) => {
    
    fetch(`http://localhost:3000/api/search?searchQuery=${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        setLinks(data)
      })
    
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
      <SearchBar onSubmit={onButtonClick} />
      <SearchResult links={links} />
      <SearchInfo/>
  </>
  )
}

export default App