import React, { useState } from "react";
import ConnectModal from "./components/ConnectModal";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import CreatePost from "./components/CreatePost";

const App = () => {
  // Est-ce que l'utilisateur est connecté ?
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogout = async () => {
    await signOut(auth);
  }

  return (
    <div>
      <div className="app-header">
      {user && (
        <div className="user-infos">
          {/* On affiche la première lettre du pseudo dans la span */}
          <span>{user?.displayName[0]}</span>
          {/* On affiche le pseudo */}
          <h4>{user?.displayName}</h4>
          {/* Le bouton pour se déconnecter */}
          <button onClick={() => handleLogout()}><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
        </div>
      )}
        {user ? <CreatePost /> : <ConnectModal />}

      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;