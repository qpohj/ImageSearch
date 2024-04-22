import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../components/NavBar';
import Profile from '../components/auth0/Profile';

const ProfileView = () => {
    const { user } = useAuth0();
    

    return (
        <div>
            <Navbar />
            <p>ProfileView</p>
            <Profile />
        </div>
    );
};

export default ProfileView;
