import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivatePage = ({ page }) => {
  const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));

  if (isAuthenticated) {
    return page;
  }

  return <Navigate to="/login" />;
};

PrivatePage.propTypes = {
  page: PropTypes.element,
};

export default PrivatePage;
