import "./App.scss";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <h1>{user?.nickname}</h1>
          <img src={user?.picture} alt="user" />
        </>
      ) : null}
    </div>
  );
};

export default Profile;
