import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { createUser, getAllUsers } from "./crud";

const Home = () => {
  const [data, setData] = useState([]);

  const createNewUser = async (user) => {
    const responseData = await createUser(user);
    setData([...data, responseData]);
  };

  const loadData = async () => {
    const loadData = await getAllUsers();
    setData(loadData);
  };

  useEffect(() => {
    // get all the users & load in state
    loadData();
  }, []);

  return (
    <div>
      <UserForm createNewUser={createNewUser} />
      <UserList users={data} />
    </div>
  );
};

export default Home;
