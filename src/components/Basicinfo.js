import { isMobile } from "react-device-detect";
import BasicinfoMobile from "./BasicinfoMobile";
import BasicinfoPC from "./BasicinfoPC";

const Basicinfo = () => {
  if (isMobile) {
    return <BasicinfoMobile />;
  } else {
    return <BasicinfoPC />;
  }
};

export default Basicinfo;
