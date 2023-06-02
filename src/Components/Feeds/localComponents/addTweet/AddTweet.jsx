/* eslint-disable react/prop-types */
import style from "./AddTweet.module.css";
import { BsFileImage } from "react-icons/bs";
import { AiOutlineFileGif, AiOutlineSchedule } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  tweetDialog,
  tweetMsgAtom,
  tweetAtom,
} from "../../../../recoil/TweetAtom";

export default function AddTweet() {
  const setIsDialog = useSetRecoilState(tweetDialog);
  const [tweetMsg, setTweetMsg] = useRecoilState(tweetMsgAtom);
  const [tweet, setTweet] = useRecoilState(tweetAtom);

  const dummyData = {
    id: Date.now(),
    content: "",
    createdAt: Date.now(),
    image: `https://picsum.photos/1000/500?q=${Date.now()}`,
    tweetedBy: {
      id: "a2b9f2ce-a4bf-45bd-a545-5ee996ffa451",
      name: "You",
    },
    likeCount: 0,
    commentCount: 0,
    reTweetsCount: 0,
    isLiked: false,
  };

  function handleTweet() {
    const newDummy = { ...dummyData };
    newDummy.content = tweetMsg;
    setTweet([newDummy, ...tweet]);
    setIsDialog(false);
    setTweetMsg("");
  }

  return (
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
          <input
            onChange={(e) => setTweetMsg(e.target.value)}
            placeholder="What's happening?"
          />
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
  );
}

function TweetButton({ onClick }) {
  return (
    <button onClick={onClick} id={style.tweetBtn}>
      Tweet
    </button>
  );
}
