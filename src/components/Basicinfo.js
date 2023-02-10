import BasicinfoMobile from "./BasicinfoMobile";
import BasicinfoPC from "./BasicinfoPC";

const Basicinfo = () => {
  if (window.innerWidth <= 430) {
    return <BasicinfoMobile />;
  } else {
    return (
    <div style={container}>
      <BasicinfoPC />
    </div>
  )}
};

const container = {
  backgroundColor: "grey",
  display: "flex",
  minHeight: "100vh",
  width: "100%",
  fontFamily: "sans-serif",
};

export default Basicinfo;
