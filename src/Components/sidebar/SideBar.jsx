/* eslint-disable react/prop-types */
import Icons from "../../Datas/SidebarData";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import style from "./SideBar.module.css";
import { CgClose } from "react-icons/cg";
import { FaFeatherAlt } from "react-icons/fa";
import { BsFileImage } from "react-icons/bs";
import UsersName from "../userName/UsersName";
import { AiOutlineFileGif, AiOutlineSchedule } from "react-icons/ai";
import { BiPoll, BiChevronDown } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { RiEarthFill } from "react-icons/ri";
import { useRecoilState, useRecoilValue } from "recoil";
import { tweetMsgAtom, tweetAtom, tweetDialog } from "../../recoil/TweetAtom";
import { userIdAtom } from "../../recoil/users";

export default function SideBar() {
  const [isdialog, setIsDialog] = useRecoilState(tweetDialog);
  const [tweetMsg, setTweetMsg] = useRecoilState(tweetMsgAtom);
  const [tweet, setTweet] = useRecoilState(tweetAtom);
  const userId = useRecoilValue(userIdAtom);

  const dummyData = {
    id: Date.now(),
    content: "",
    createdAt: Date.now(),
    image: `https://picsum.photos/1000/500?q=${Date.now()}`,
    tweetedBy: {
      id: "a2b9f2ce-a4bf-45bd-a545-5ee996ffa451",
      name: "",
    },
    likeCount: 0,
    commentCount: 0,
    reTweetsCount: 0,
    isLiked: false,
  };

  const buttonStyle = {
    margin: "0 0 0 1.2rem",
    width: "13rem",
    height: "3rem",
    fontSize: "1rem",
    fontWeight: "900",
    borderRadius: "2rem",
    textTransform: "none",
    "@media (max-width:1200px)": {
      display: "none",
    },
  };

  function handleTweet() {
    console.log(userId);
    const newDummy = { ...dummyData };
    newDummy.content = tweetMsg;
    newDummy.tweetedBy.name = userId;
    setTweet([newDummy, ...tweet]);
    setIsDialog(false);
  }

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.Sidebar}>
          {Icons.map((ele) => (
            <div key={ele.id} className={style.container}>
              <span className={style.icons2}>{ele.icons}</span>
              <span className={style.names}>{ele.name}</span>
            </div>
          ))}
          <span className={style.BtnIcon}>
            <FaFeatherAlt onClick={() => setIsDialog(true)} />{" "}
          </span>
        </div>
        <Button
          sx={{ ...buttonStyle }}
          variant="contained"
          onClick={() => setIsDialog(true)}
        >
          Tweet
        </Button>
        <span className={style.UsersName}>
          <UsersName />
        </span>
      </div>
      {/* <TweetDialog onClick={handleTweet} /> */}
      <Dialog
        PaperProps={{
          style: { borderRadius: 15 },
          sx: {
            width: "100%",
            minHeight: 300,
          },
        }}
        open={isdialog}
      >
        <DialogTitle>
          <CgClose
            onClick={() => setIsDialog(false)}
            style={{ cursor: "pointer" }}
          />
        </DialogTitle>
        <DialogContent>
          <div id={style.mainBox}>
            <div id={style.content}>
              <div style={{ display: "flex", gap: "15px" }}>
                <div id={style.imgBox}>
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="profile"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div
                  id={style.feedType}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <PublicDropDown />
                  <input
                    onChange={(e) => setTweetMsg(e.target.value)}
                    placeholder="What's happening?"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "100px 0px 0px 64px",
                  gap: "10px",
                }}
              >
                <div id={style.selectedType}>
                  {" "}
                  <RiEarthFill />
                  Everyone can reply
                </div>
                <div id={style.addTweetFoot}>
                  <div className={style.icons}>
                    <div>
                      <BsFileImage className={style.icon} />
                    </div>
                    <div>
                      <AiOutlineFileGif className={style.icon} />
                    </div>
                    <div>
                      <BiPoll className={style.icon} />
                    </div>
                    <div>
                      <HiOutlineEmojiHappy className={style.icon} />
                    </div>
                    <div>
                      <AiOutlineSchedule className={style.icon} />
                    </div>
                    <div>
                      <CiLocationOn className={style.icon} />
                    </div>
                  </div>
                  <TweetButton onClick={handleTweet} />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function TweetButton({ onClick }) {
  return (
    <button onClick={onClick} id={style.tweetBtn}>
      Tweet
    </button>
  );
}

function PublicDropDown() {
  return (
    <div id={style.feedTypeBtn}>
      Everyone
      <BiChevronDown />
    </div>
  );
}
