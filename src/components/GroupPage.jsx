import { GroupContext } from "../contexts/groupContext";
import { useContext, useState, useEffect } from "react";
import NavBar from "./NavigationBar";
import { Link, useParams } from "react-router-dom";
import { getGroupData } from "../utils/api";

const GroupPage = () => {
  const { group_slug } = useParams();
  const [groupData, setGroupData] = useState("");
  const [lookupObj, setLookupObj] = useState([]);

  useEffect(() => {
    getGroupData(group_slug).then((response) => {
      setGroupData(response);
      setLookupObj(Object.keys(response));
    });
  }, []);

  console.log(group_slug);

  return (
    <div className="map-page">
      <NavBar />
      <h2>{group_slug}</h2>
      <ul className="group-list">
        {lookupObj.map((member) => {
          return (
            <li>
              <p>{member}</p>
            </li>
          );
        })}
      </ul>
      <Link to={`/Compass_Test/${group_slug}/ar`}>
        <button className="menu-buttons">View in AR</button>
      </Link>
      <Link to={`/Compass_Test/${group_slug}/map`}>
        <button className="menu-buttons">View in 2D</button>
      </Link>
    </div>
  );
};

export default GroupPage;
