import { useNavigate, Link } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import apiRequest from "../../lib/apiRequest";
import "./profile.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      const res = apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    currentUser && (
      <div className="profile">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <Link to={"/profile/update"}>
                <button>Update profile</button>
              </Link>
            </div>
            <div className="info">
              <span>
                Avatar:{" "}
                <img
                  src={
                    currentUser.avatar ||
                    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.C8MLNS-O_kwtnrf_GDdfaAHaGm%26pid%3DApi&f=1&ipt=55ae4db309cc68986d8924cf28f7376983fa7a40c858b77d8cf2e436e4de37e2&ipo=images"
                  }
                  alt=""
                />
              </span>
              <span>
                Username: <b>{currentUser.username}</b>
              </span>
              <span>
                Email: <b>{currentUser.email}</b>
              </span>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="title">
              <h1>My List</h1>
              <button>Create New Post</button>
            </div>
            <List />
            <div className="title">
              <h1>Saved List</h1>
            </div>
            <List />
          </div>
        </div>
        <div className="chatContainer">
          <div className="wrapper">
            <Chat />
          </div>
        </div>
      </div>
    )
  );
}

export default Profile;
