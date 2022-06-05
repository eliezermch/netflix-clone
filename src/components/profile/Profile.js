import "./profile.css";
import netflixAvatar from "../../assets/images/logos/netflix-avatar.png";

const Profile = () => {
  return (
    <div>
      <img
        className="nav_netflix_avatar"
        src={netflixAvatar}
        alt="Netflix Avatar Image"
      />
    </div>
  );
};

export { Profile };
