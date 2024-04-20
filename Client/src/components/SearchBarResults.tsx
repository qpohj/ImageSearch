import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"

type SearchResultProps = {
    links: Array<string>
    addImageToList: (link:string) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ links, addImageToList }) => {

    const { user } = useAuth0()
    
    const onImageClick:any = async (link:any) => {
        await axios.post(`http://localhost:3000/api/user:Id/favorites`, { pinnedCowUrl: link, nickname: user?.nickname  })
    }

    // return json data - link: from google api call.
    return (
        <div>
            {links.map(link => {
                return (
                    <>
                        <img onClick={() => { onImageClick(link); addImageToList(link) }} src={link} width={200} height={200} />
                    </>
                )
            })}
        </div>   
    )
}

export default SearchResult;