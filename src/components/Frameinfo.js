import { useState, useEffect } from "react";
import edit from "../img/edit.png";
import trash from "../img/trash.png";
import "../style/Frameinfo/style.css";
import axios from "axios";

function Frameinfo() {
  const [framephoto, setFramephoto] = useState();
  const [addframe, setAddframe] = useState(true);
  const [framecode, setFramecode] = useState("");
  const [framename, setFramename] = useState("");
  const [price, setPrice] = useState("");
  const [render, setRender] = useState();
  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState(false);
  const [framephotorender, setFramephotorender] = useState(null);
  const [updateid, setUpdateid] = useState("");

  async function handleDelete(id) {
    axios
      .delete(`http://192.168.0.169:8000/api/deleteframe/${id}`)
      .then((res) => {
        setCount(count - 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdate(arr) {
    setUpdateid(arr.id);
    setFramecode(arr.frame_code);
    setFramename(arr.frame_name);
    setFramephotorender(
      <img
        style={pic2}
        width={"200px"}
        height={"100px"}
        src={`http://192.168.0.169:8000/media/${arr.frame_pic}`}
        alt=""
      />
    );
    setFramephoto();
    setPrice(arr.frame_price);
    setUpdate(true);
    setAddframe(true);
  }

  async function handleUpdateAPI(e) {
    await axios
      .put(
        `http://192.168.0.169:8000/api/updateframe/${updateid}`,
        {
          frame_code: framecode,
          frame_name: framename,
          frame_pic: framephoto,
          frame_price: parseFloat(price),
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setCount(count + 1);
        setFramecode("");
        setPrice("");
        setFramename("");
        setFramephoto();
        setFramephotorender();
        setUpdateid("");
        setUpdate(false);
        setAddframe(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    async function setFrame() {
      let rendertemp = [];
      let res = await axios.get("http://192.168.0.169:8000/api/getframe/");
      for (let i = 0; i < res.data.length; i++) {
        rendertemp.push(
          <tr key={res.data[i].frame_code}>
            <td>{res.data[i].frame_code}</td>
            <td>{res.data[i].frame_name}</td>
            <td>
              <img
                src={`http://192.168.0.169:8000/media/${res.data[i].frame_pic}`}
                alt=""
              />
            </td>
            <td>{res.data[i].frame_price}</td>
            <td>
              <button
                onClick={(e) => handleUpdate(res.data[i])}
                className="add"
              >
                <img src={edit} alt="" />
              </button>
              &emsp;
              <button
                onClick={(e) => handleDelete(res.data[i].id)}
                className="remove"
              >
                <img src={trash} alt="" />
              </button>
            </td>
          </tr>
        );
      }
      setRender(rendertemp);
    }
    setFrame();
    // eslint-disable-next-line
  }, [count]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (isNaN(parseFloat(price))) {
      console.log("Letters detected");
      return;
    }

    await axios
      .post(
        "http://192.168.0.169:8000/api/frame/",
        {
          frame_code: framecode,
          frame_name: framename,
          frame_pic: framephoto,
          frame_price: parseFloat(price),
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          setCount(count + 1);
          setFramecode("");
          setPrice("");
          setFramename("");
          setFramephoto();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlePhoto(e) {
    setFramephoto(e.target.files[0]);
    setFramephotorender(
      <img
        style={pic2}
        alt="not fount"
        height={"100px"}
        width={"200px"}
        src={URL.createObjectURL(e.target.files[0])}
      />
    );
  }

  function handleRemove(e) {
    setFramephoto();
    setFramephotorender();
  }

  function handleEntryReset(e) {
    setFramephoto();
    setFramephotorender();
    setFramecode("");
    setFramename("");
    setPrice("");
  }

  function handleEditReset(e) {
    setCount(count + 1);
    setFramecode("");
    setPrice("");
    setFramename("");
    setFramephoto();
    setFramephotorender();
    setUpdateid("");
    setUpdate(false);
    setAddframe(false);
  }

  return (
    <div className="frameinfo">
      <div className="switch">
        <button onClick={() => setAddframe(true)} className="ef">
          Enter Frame
        </button>
        <button onClick={() => setAddframe(false)} className="vf">
          View Frame
        </button>
      </div>

      {addframe ? (
        <div className="enter-frame">
          <div className="fdetails">
            <div className="fname">
              <label>Frame Code :&emsp;&emsp;</label>
              <input
                type="text"
                value={framecode}
                onChange={(e) => setFramecode(e.target.value)}
              />
            </div>
            <div className="fcode">
              <label>Frame Name :&emsp;&emsp;</label>
              <input
                type="text"
                value={framename}
                onChange={(e) => setFramename(e.target.value)}
              />
            </div>
            <div className="fimage">
              <label>Frame Image:</label>
              {(framephoto || framephotorender) && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {framephotorender}
                  <br />
                  <button style={buttonstyle} onClick={(e) => handleRemove(e)}>
                    Remove
                  </button>
                </div>
              )}
              <input
                style={entry}
                type="file"
                name="myImage"
                accept="image/jpeg,image/png,image"
                onChange={(e) => handlePhoto(e)}
              />
            </div>
            <div className="mrp mrp1">
              <label>MRP :&emsp;&emsp;</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="button-edit">
              {update ? (
                <div>
                  <button
                    style={buttonstyle}
                    onClick={(e) => handleEditReset(e)}
                  >
                    Cancel
                  </button>
                  <button
                    style={buttonstyle}
                    onClick={(e) => handleUpdateAPI(e)}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    style={buttonstyle}
                    onClick={(e) => handleEntryReset(e)}
                  >
                    Reset
                  </button>
                  <button style={buttonstyle} onClick={(e) => handleSubmit(e)}>
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
          <br />
        </div>
      ) : (
        <div className="view-frame">
          <table>
            <thead>
              <tr>
                <th>Frame Code</th>
                <th>Frame Name</th>
                <th>Frame Image</th>
                <th>MRP</th>
                <th className="edit"></th>
              </tr>
            </thead>
            <tbody>{render}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const pic2 = {
  objectFit: "cover !important",
  objectPosition: "center",
};
const buttonstyle = {
  border: "2px solid black",
  padding: ".5rem 1.5rem",
  marginRight: ".5rem",
  width: "fit-content",
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
