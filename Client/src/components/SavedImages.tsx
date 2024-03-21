import { User } from "@auth0/auth0-react";
import { FC } from "react";

type SavedImagesProps = {
    imageLinks: Array<string>,
    user:User
}

const SavedImages:FC<SavedImagesProps> = ({ imageLinks, user }) => {
    // Info like search time and if spelling was correct etc.
    
    return (
        <div>
            <p>{user.nickname} favourites:</p>
            <ul>{imageLinks && imageLinks.map((link: string) => <li><img src={link} width={200} height={200} /></li>)}</ul>
        </div>        
    )
}

export default SavedImages;