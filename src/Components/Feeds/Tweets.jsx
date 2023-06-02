/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import style from "./Tweets.module.css";
import AddTweet from "./localComponents/addTweet/AddTweet";
import HeaderComponent from "./localComponents/headerComponent/HeaderComponent";
import { GoVerified } from "react-icons/go";
import { BsChat } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { HiOutlineUpload } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";
import { tweetAtom } from "../../recoil/TweetAtom";
import { useRecoilState } from "recoil";

export default function Tweets() {
  const [tweets, setTweets] = useRecoilState(tweetAtom);
  useEffect(() => {
    axios
      .get("/tweets.json")
      .then((response) => setTweets(response.data));
  }, []);

  function handleLike(index) {
    const tweet = { ...tweets[index] };
    const updated = [...tweets];
    tweet.isLiked = !tweet.isLiked;
    tweet.isLiked ? tweet.likeCount++ : tweet.likeCount--;
    updated[index] = tweet;
    setTweets(updated);
  }

  return (
    <div className={style.mainBox}>
      <HeaderComponent />
      <div className={style.scroller}>
        <AddTweet />
        <div id={style.showTweetBtn}>Show 1,085 Tweets</div>

        <div>
          {tweets.map((item, index) => (
            <Tweet
              onClick={() => handleLike(index)}
              image={item.image}
              content={item.content}
              tweetedBy={item.tweetedBy}
              likeCount={item.likeCount}
              commentCount={item.commentCount}
              reTweetsCount={item.reTweetsCount}
              isLiked={item.isLiked}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Tweet({
  onClick,
  image,
  content,
  tweetedBy,
  likeCount,
  commentCount,
  reTweetsCount,
  isLiked,
}) {
  return (
    <div id={style.tweet}>
      <div id={style.content}>
        <div id={style.imgBox}>
          <img
            src={image}
            alt="profile"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <div id={style.tweetData}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <div id={style.name}>{tweetedBy.name}</div>
              <GoVerified style={{ color: "#1d9bf0" }} />
              <div className={style.fontTernary}>@teslaownersSV</div>
              <div className={style.fontTernary}>. 7h</div>
            </div>
            <FiMoreHorizontal className={style.fontSecondary} />
          </div>
          <div className={style.fontSecondary}>{content}</div>
          <div id={style.feedImg}>
            <img
              onDoubleClick={onClick}
              src={image}
              alt="feed"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: "2rem", padding: "5px 0px" }}>
            <div id={style.comment} className={style.feedIcons}>
              <BsChat className={style.icon} />
              <div className={style.fontSecondary}>{commentCount}</div>
            </div>
            <div className={style.feedIcons}>
              <AiOutlineRetweet className={style.icon} />
              <div className={style.fontTernary}>{reTweetsCount}</div>
            </div>
            <div onClick={onClick}>
              {isLiked ? (
                <div className={style.feedIcons}>
                  <AiFillHeart
                    className={style.icon}
                    style={{ color: "#f91880" }}
                  />
                  <div
                    className={style.fontTernary}
                    style={{ color: "#f91880" }}
                  >
                    {likeCount}
                  </div>
                </div>
              ) : (
                <div className={style.feedIcons}>
                  <AiOutlineHeart className={style.icon} />
                  <div className={style.fontTernary}>{likeCount}</div>
                </div>
              )}
            </div>
            <div className={style.feedIcons}>
              <BiBarChart className={style.icon} />
              <div className={style.fontTernary}>555.5k</div>
            </div>
            <div className={style.feedIcons}>
              <HiOutlineUpload className={style.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
