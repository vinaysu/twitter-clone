/* eslint-disable react/prop-types */
import style from "./TweetDialog.model.css";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { CgClose } from "react-icons/cg";
import { BsFileImage } from "react-icons/bs";
import { AiOutlineFileGif, AiOutlineSchedule } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { RiEarthFill } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { tweetDialog } from "../../recoil/TweetAtom";
import { BiPoll, BiChevronDown } from "react-icons/bi";

export default function TweetDialog({ onClick }) {
  const [isdialog, setIsDialog] = useRecoilState(tweetDialog);
  return (
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
                <TweetButton onClick={onClick} />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
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
      <BiChevronDown />{" "}
    </div>
  );
}
