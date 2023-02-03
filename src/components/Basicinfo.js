import BasicinfoMobile from "./BasicinfoMobile";
import BasicinfoPC from "./BasicinfoPC";
import Frameinfo from "./Frameinfo";

const Basicinfo = () => {
  if (window.innerWidth <= 430) {
    return <BasicinfoMobile />;
  } else {
    return <BasicinfoPC />;
  }
};

export default Basicinfo;
