import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyToken } from "../crud";

const VerifyAccount = () => {
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const checkToken = async () => {
    setLoading(true);
    const _response = await verifyToken(params.get("token"));
    setResponse(_response);
    setLoading(false);
  };

  useEffect(() => {
    checkToken();
  }, []);

  return <div>{loading ? "loading..." : response.msg || ""}</div>;
};

export default VerifyAccount;
