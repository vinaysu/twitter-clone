/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import style from "./LoginPage.module.css";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ImCross } from "react-icons/im";
import { emailOnHome } from "../../localStorage/LocalStorage";
import { useSetRecoilState } from "recoil";
import { userIdAtom } from "../../recoil/users";

const btnstyle = {
  backgroundColor: "white",
  border: "1px solid black",
  fontSize: "15px",
  color: "black",
  borderRadius: "20px",
  width: "350px",
  height: "7vh",
  textTransform: "none",
  padding: "7px 10px",
  "@media (max-width: 700px)": {
    width: "300px",
  },
  "@media (max-width: 400px)": {
    width: "200px",
  },
};

const textFieldCss = {
  border: "0.01px solid #00acee",
  marginBottom: "0.5rem",
  backgroundColor: "#ffffff",
  width: "21rem",
  borderRadius: 2,
  "@media (max-width: 400px)": {
    width: "150px",
    marginLeft: "20px",
  },
};

export default function LoginPage() {
  const navigate = useNavigate();
  const allUsersFromLocal = JSON.parse(localStorage.getItem("user"));
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const emailOfUserShownOnHome = useSetRecoilState(emailOnHome);
  const setUserId = useSetRecoilState(userIdAtom);

  function handleLogin() {
    if (
      allUsersFromLocal.find(
        (ele) => ele.email === enteredEmail && ele.password === enteredPassword
      )
    ) {
      localStorage.setItem("isLogin", "true");
      emailOfUserShownOnHome(enteredEmail);
      let userId =
        enteredEmail.substring(0, 4) + Math.floor(Math.random() * 100);
      setUserId(userId);
      // console.log(userId);
      localStorage.setItem("currentUser", enteredEmail);
      navigate("/");
    } else if(  allUsersFromLocal.find(
        (ele) => ele.email !== enteredEmail || ele.password !== enteredPassword)){
              alert("Enter valid informations")
     };
  }

  const handleDialog = () => {
    // setIsVisible(!isVisible);
  };

  return (
    <Dialog open={isVisible} className={style.mainDiv} PaperProps={{
      style: { borderRadius: 15 },
      sx: {
        width: "100%",
        maxHeight: 650,
      },
    }}>
      <div className={style.wrapper}>
        <DialogTitle className={style.icons}>
          <span className={style.icon1}>
            <ImCross onClick={handleDialog} />
          </span>
          <span className={style.icon2}>
            <TfiTwitterAlt />
          </span>
        </DialogTitle>
        <DialogContent className={style.content}>
          <p className={style.text}>
            <b>Sign in to Twitter</b>
          </p>
          <Button sx={{ ...btnstyle }} variant="contained">
            <span className={style.btnIcon}>
              <FcGoogle />
            </span>
            Sign in with Google
          </Button>
          <Button sx={{ ...btnstyle }} variant="contained">
            <span className={style.btnIcon}>
              <BsApple />
            </span>
            <b>Sign in with Apple</b>
          </Button>
          <div className={style.container}>
            <span className={style.header__center}>or</span>
          </div>
          <div className={style.div}>
            <TextField
              label={
                /^\w+([\.-]?\w+)*@(?:\w+\.)+(?:com|in)$/.test(enteredEmail) ? (
                  <p style={{ color: "#00acee" }}>Email</p>
                ) : (
                  <p style={{ color: "black" }}>Email</p>
                )
              }
              variant="filled"
              sx={{ ...textFieldCss }}
              onChange={(e) => {
                setEnteredEmail(e.target.value);
              }}
            />
            {/^\w+([\.-]?\w+)*@(?:\w+\.)+(?:com|in)$/.test(enteredEmail) ? (
              ""
            ) : (
              <p style={{ margin: "-12px 0 -12px 0", color: "red" }}>
                Enter a valid Email
              </p>
            )}
            <TextField
              type="password"
              label={
                /^(?=.*\d).{8,}$/.test(enteredPassword) ? (
                  <p style={{ color: "#00acee" }}>Password</p>
                ) : (
                  <p style={{ color: "black" }}>Password</p>
                )
              }
              variant="filled"
              sx={{ ...textFieldCss }}
              onChange={(e) => {
                setEnteredPassword(e.target.value);
              }}
            />
            {/^(?=.*\d).{8,}$/.test(enteredPassword) ? (
              ""
            ) : (
              <p style={{ margin: "-12px 0 -12px 0", color: "red" }}>
                Password contain 8 letter 1 number
              </p>
            )}

            <p style={{ marginTop: "0.5rem" }}>
              Don't have an account?
              <Link to={"/signup"} className={style.Link}>
                <b>Signup</b>
              </Link>
            </p>
            <Button
              variant="contained"
              sx={{ borderRadius: "15px" }}
              onClick={handleLogin}
            >
              Signin
            </Button>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}
