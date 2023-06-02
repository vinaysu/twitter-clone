/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { Components } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      navigate("/signin");
    }
  });

  return (
    <>
      <Components />
    </>
  );
}

export default Protected;
