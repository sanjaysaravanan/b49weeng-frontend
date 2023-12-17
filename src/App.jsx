import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./Home";
import PrivatePage from "./pages/PrivatePage";
import VerifyAccount from "./pages/VeiryAccount";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<PrivatePage page={<Home onlyListing />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<VerifyAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
