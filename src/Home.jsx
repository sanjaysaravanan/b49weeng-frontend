import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { createUser, getAllUsers } from "./crud";

const Home = ({ onlyListing }) => {
  const [data, setData] = useState([]);

  const createNewUser = async (user) => {
    const responseData = await createUser(user);
    setData([...data, responseData]);
  };

  const loadData = async () => {
    const loadData = await getAllUsers();
    setData(loadData);
  };

  const logoutUser = () => {
    localStorage.clear();
    location.reload();
  };

  useEffect(() => {
    // get all the users & load in state
    loadData();
  }, []);

  return (
    <div>
      <button onClick={logoutUser}>Logout</button>
      {!onlyListing && <UserForm createNewUser={createNewUser} />}
      <UserList users={data} />
    </div>
  );
};

Home.propTypes = {
  onlyListing: PropTypes.bool,
};

export default Home;
