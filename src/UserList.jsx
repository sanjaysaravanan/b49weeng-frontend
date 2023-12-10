import PropTypes from "prop-types";
import styles from "./UserCard.module.css";

const UserCard = ({ name, dob, email, imageUrl }) => {
  return (
    <div className={styles["user-card"]}>
      <img src={imageUrl} alt={name} />
      <div className={styles["user-details"]}>
        <h2>{name}</h2>
        <p>Date of Birth: {dob}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  email: PropTypes.string,
  imageUrl: PropTypes.string,
};

const UserList = ({ users }) => {
  return (
    <div className={styles["user-list"]}>
      {users.map((user) => (
        <UserCard key={user.userId} {...user} />
      ))}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf({}),
};

export default UserList;
