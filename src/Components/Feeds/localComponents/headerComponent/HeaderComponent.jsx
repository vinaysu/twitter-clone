/* eslint-disable react/prop-types */
import style from "./HeaderComponent.module.css";

export default function HeaderComponent() {
  return (
    <div className={style.mainBox}>
      <div id={style.content}>
        <h3 style={{ margin: "15px" }}>Home</h3>
      </div>
      <div id={style.feedBtnBox}>
        <FeedToggleBtn name={"For you"} />
        <FeedToggleBtn name={"Following"} />
      </div>
    </div>
  );
}

function FeedToggleBtn({ name }) {
  return <div id={style.feedToggleBtn}>{name}</div>;
}
