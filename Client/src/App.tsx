import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    const search = async () => {
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_SEARCH_ENGINE_ID}&num=10&searchType=image&q=cow`)
      const data = await response.json() 
      console.log(data);
    }
    search()
  }, [])

  const { isAuthenticated } = useAuth0() 

  return (
    isAuthenticated ? <LogoutButton /> : <LoginButton />
    

  )
}

export default App