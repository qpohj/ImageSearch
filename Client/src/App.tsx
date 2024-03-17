import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchBarResults'
import Profile from './components/Profile'

const App = () => {

  // useEffect(() => {
  //   const search = async () => {
  //     const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_SEARCH_ENGINE_ID}&num=10&searchType=image&q=cow`)
  //     const data = await response.json() 
  //     console.log(data);
  //   }
  //   search()
  // }, [])

  const { isAuthenticated } = useAuth0();
  const [links, setLinks] = useState<Array<string>>([]);

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
      <SearchResult links={links}/>
  </>
  )
}

export default App