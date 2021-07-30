import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GroupPage from "./components/GroupPage";
import { useState } from "react";
import { GroupContext } from "./contexts/groupContext";
import Map from "./components/Map";
import Marker from "./components/Marker";
import GeoLocation from "./components/GeoLocation";

function App() {
  const [username, setUsername] = useState("");
  const [groupName, setGroupName] = useState("");

  return (
    <BrowserRouter>
      <GeoLocation />
      <GroupContext.Provider value={{ groupName, setGroupName }}>
        <div className="App">
          <Switch>
            <Route exact path="/Compass_Test">
              <LandingPage
                setUsername={setUsername}
                username={username}
                groupName={groupName}
                setGroupName={setGroupName}
              />
            </Route>
            <Route exact path="/Compass_Test/:group_slug">
              <GroupPage />
            </Route>
            <Route exact path="/Compass_Test/:group_slug/map">
              <Map />
            </Route>
            <Route exact path="/Compass_Test/:group_slug/ar">
              <Marker />
            </Route>
          </Switch>
        </div>
      </GroupContext.Provider>
    </BrowserRouter>
  );
}

export default App;
