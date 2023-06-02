import { BiHomeCircle } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { TbMessage2 } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";

const SidebarData = [
  {
    id: 1,
    icons: <BsTwitter />,
    name: "",
  },
  {
    id: 2,
    icons: <BiHomeCircle />,
    name: "Home",
  },
  {
    id: 3,
    icons: <FaHashtag />,
    name: "Explore",
  },
  {
    id: 4,
    icons: <IoMdNotifications />,
    name: "Notifications",
  },
  {
    id: 5,
    icons: <TbMessage2 />,
    name: "Messages",
  },
  {
    id: 6,
    icons: <BsFillBookmarkFill />,
    name: "Bookmarks",
  },
  {
    id: 7,
    icons: <AiFillTwitterSquare />,
    name: "Twitter Blue",
  },
  {
    id: 8,
    icons: <CgProfile />,
    name: "Profile",
  },
  {
    id: 9,
    icons: <CiCircleMore />,
    name: "More",
  },
];

export default SidebarData;
