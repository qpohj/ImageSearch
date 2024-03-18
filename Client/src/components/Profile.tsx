import { useAuth0 } from "@auth0/auth0-react";


// pulled from auth0...
// identify the logged in user.
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
  console.log(user)

  return (
    isAuthenticated && (
      <div>
        <img src={user?.picture} alt={user?.name} width={200} />
        <h2>{user?.name}</h2>
        <p>{user?.nickname}</p>
        <p>{user?.sub}</p>
      </div>
    )
  );
};

export default Profile;


