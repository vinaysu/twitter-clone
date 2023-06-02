import style from "./HomePage.module.css";
import SideBar from "../../Components/sidebar/SideBar";
import SearchBar from "../../Components/searchBar/SearchBar";
import WhatsNew from "../../Components/WhatsNew/WhatsNew";
import Tweets from "../../Components/Feeds/Tweets";
import FollowList from "../../Components/followList/FollowList";

export default function HomePage() {
  return (
    <>
      <div className={style.MainContainer}>
        <div className={style.LsideBar}>
          <SideBar />
        </div>
        <div className={style.MidDiv}>
          <Tweets />
        </div>
        <div className={style.RsideBar}>
          <SearchBar />
          <WhatsNew />
          <FollowList />
          <div>
            Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
            More © 2023 X Corp.
          </div>
        </div>
      </div>
    </>
  );
}
