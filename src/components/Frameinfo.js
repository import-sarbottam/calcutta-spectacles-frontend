import { useState } from "react";
import pic1 from "../img/1.png";
import edit from "../img/edit.png";
import trash from "../img/trash.png";
import "../style/style.css";

function Frameinfo() {
  const [userphoto, setUserphoto] = useState(null);
  return (
    <div className="frameinfo">
      <div className="switch">
        <button className="ef">Enter Frame</button>
        <button className="vf">View Frame</button>
      </div>

      <div className="enter-frame">
        <div className="fdetails">
          <div className="fname">
            <label>Frame Name :&emsp;&emsp;</label>
            <input type="text"></input>
          </div>
          <div className="fcode">
            <label>Frame Code :&emsp;&emsp;</label>
            <input type="text" value="abc"></input>
          </div>
          <div className="fimage">
            <label>Frame Image:</label>
            {userphoto && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  style={pic2}
                  alt="not fount"
                  height={"350px"}
                  width={"250px"}
                  src={URL.createObjectURL(userphoto)}
                />
                <br />
                <button style={buttonstyle} onClick={() => setUserphoto(null)}>
                  Remove
                </button>
              </div>
            )}
            <input
              style={entry}
              type="file"
              name="myImage"
              onChange={(event) => {
                setUserphoto(event.target.files[0]);
              }}
            />
          </div>
          <div className="mrp">
            <label>MRP :&emsp;&emsp;</label>
            <input type="text" value="1000"></input>
          </div>
        </div>
      </div>

      <div className="view-frame">
        <table>
          <tr>
            <th>Frame Name</th>
            <th>Frame Code</th>
            <th>Frame Image</th>
            <th>MRP</th>
            <th className="edit"></th>
          </tr>
          <tr>
            <td>Round</td>
            <td>R101</td>
            <td>
              <img src={pic1} alt="" />
            </td>
            <td>1000</td>
            <td>
              <button className="add">
                <img src={edit} alt="" />
              </button>
              &emsp;
              <button className="remove">
                <img src={trash} alt="" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Oval</td>
            <td>O101</td>
            <td>
              <img src={pic1} alt="" />
            </td>
            <td>2000</td>
            <td>
              <button className="add">
                <i className="fa-solid fa-plus"></i>
              </button>
              &emsp;
              <button className="remove">
                <i className="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Square</td>
            <td>S101</td>
            <td>
              <img src={pic1} alt="" />
            </td>
            <td>3000</td>
            <td>
              <button className="add">
                <i className="fa-solid fa-plus"></i>
              </button>
              &emsp;
              <button className="remove">
                <i className="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

const pic2 = {
  objectFit: "cover",
  objectPosition: "center top",
};
const buttonstyle = {
  border: "2px solid black",
  padding: ".5rem 1.5rem",
};

const entry = {
  marginLeft: "1%",
  marginRight: "3.75%",
  marginTop: "1%",
  marginBottom: "1%",
  padding: "0.25%",
  verticalAlign: "middle",
};

export default Frameinfo;
