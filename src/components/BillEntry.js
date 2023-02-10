import React, { Fragment } from "react";
import plus from "../img/plus.png";
import minus from "../img/minus.png";
import framee from "../img/1.png";
import { useState, useEffect } from "react";

import frames from "../data/required/frame.json"; //get from backend later
import others from "../data/required/others.json"; //get from backend later

import "../style/Billentry/main.css";

const Billentry = () => {
  //Basic info related variable
  const [dod, setDod] = useState("");
  const [dob, setDob] = useState("");
  const [doa, setDoa] = useState("");
  const [delat, setDelat] = useState("");
  const [coupon, setCoupon] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mob, setMob] = useState("");
  const [doc, setDoc] = useState("");
  const [basic, setBasic] = useState(false);
  const [basiclogo, setBasiclogo] = useState(<img src={plus} alt="plus" />);

  //Frame/Other related variable

  const [frame, setFrame] = useState(false);
  const [framelogo, setFramelogo] = useState(<img src={plus} alt="plus" />);
  const [framecode, setFramecode] = useState("");
  const [framephoto, setFramephoto] = useState(<img src={plus} alt="plus" />);
  const [userphoto, setUserphoto] = useState(null);
  const [selectother, setSelectother] = useState();
  const [selectframe, setSelectframe] = useState();
  const [othercode, setOthercode] = useState("");
  const [otherquant, setOtherquant] = useState("");
  let frameselect = [];
  let otherselect = [];

  // Lens related variable

  const [lens, setLens] = useState(false);
  const [lenslogo, setLenslogo] = useState(<img src={plus} alt="plus" />);
  const [lensrightdsph, setLensRightdsph] = useState("");
  const [lensrightcly, setLensRightcly] = useState("");
  const [lensrightaxis, setLensRightaxis] = useState("");
  const [lensrightadd, setLensRightadd] = useState("");
  const [lensrightpd, setLensRightpd] = useState("");
  const [lensrightfitt, setLensRightfitt] = useState("");
  const [lensrightprism, setLensRightprism] = useState("");
  const [lensrightercd, setLensRightercd] = useState("");
  const [lensleftdsph, setLensLeftdsph] = useState("");
  const [lensleftcly, setLensLeftcly] = useState("");
  const [lensleftaxis, setLensLeftaxis] = useState("");
  const [lensleftadd, setLensLeftadd] = useState("");
  const [lensleftpd, setLensLeftpd] = useState("");
  const [lensleftfitt, setLensLeftfitt] = useState("");
  const [lensleftprism, setLensLeftprism] = useState("");
  const [lensleftercd, setLensLeftercd] = useState("");
  const [lenstype, setLenstype] = useState("");
  const [precala, setPrecala] = useState("");
  const [precalb, setPrecalb] = useState("");
  const [precald, setPrecald] = useState("");
  const [lenspow, setLenspow] = useState("");
  const [wrap, setWrap] = useState("");
  const [glare, setGlare] = useState("");
  const [inc, setInc] = useState("");
  const [bifocal, setBifocal] = useState("");
  const [progression, setProgression] = useState("");
  const [photo, setPhoto] = useState("");
  const [read, setRead] = useState("");
  const [scratch, setScratch] = useState("");
  const [domeye, setDomeye] = useState("");
  const [index, setIndex] = useState("");
  const [wear, setWear] = useState("");
  const [diameter, setDiameter] = useState("");
  const [lensRemark, setLensRemark] = useState("");
  const [shape, setShape] = useState("");
  const [lensManu, setLensManu] = useState("");

  //Basic info related function

  function handleBasic(e) {
    if (basic) {
      setBasiclogo(<img src={plus} alt="plus" />);
      setBasic(false);
    } else {
      setBasiclogo(<img src={minus} alt="minus" />);
      setBasic(true);
    }
  }

  //Frame/Other related function

  function handleFrame(e) {
    if (frame) {
      setFramelogo(<img src={plus} alt="minus" />);
      setFrame(false);
    } else {
      setFramelogo(<img src={minus} alt="plus" />);
      setFrame(true);
    }
  }

  useEffect(() => {
    function setOthers() {
      // eslint-disable-next-line
      otherselect = [<option key="0" value=""></option>];
      for (let i = 0; i < others.length; i++) {
        otherselect.push(
          <option key={others[i].code} value={others[i].code}>
            {others[i].itemname}
          </option>
        );
      }
      setSelectother(otherselect);
    }
    setOthers();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    function setFrames() {
      // eslint-disable-next-line
      frameselect = [<option key="0" value=""></option>];
      for (let i = 0; i < frames.length; i++) {
        frameselect.push(
          <option value={frames[i].shortname}>{frames[i].fullnme}</option>
        );
      }
      setSelectframe(frameselect);
    }
    setFrames();
    // eslint-disable-next-line
  }, []);

  //Lens related function
  function handleLens(e) {
    if (lens) {
      setLenslogo(<img src={plus} alt="plus" />);
      setLens(false);
    } else {
      setLenslogo(<img src={minus} alt="minus" />);
      setLens(true);
    }
  }

  return (
    <div className="Billentry">
      <section>
        <div className="BasicInfo">
          <div className="header">
            <h1>Basic Info</h1>
            <button onClick={(e) => handleBasic(e)}>{basiclogo}</button>
          </div>
          {basic && (
            <div className="basic-content">
              <div className="delivery">
                <label>Delivery :</label>
                <input
                  type="date"
                  value={dod}
                  onChange={(e) => setDod(e.target.value)}
                />
                <label>Delivery At : </label>
                <input
                  type="text"
                  value={delat}
                  onChange={(e) => setDelat(e.target.value)}
                />
                <label>Coupon No : </label>
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
              </div>

              <div className="name-address">
                <div className="name">
                  <label>Name : </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="address">
                  <label>Address : </label>
                  <textarea
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="date">
                <label>Mobile No : </label>
                <input
                  type="text"
                  value={mob}
                  onChange={(e) => setMob(e.target.value)}
                />
                <label>Date of Birth : </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <label>Anniversary : </label>
                <input
                  type="date"
                  value={doa}
                  onChange={(e) => setDoa(e.target.value)}
                />
              </div>

              <div className="doctor-name">
                <label>Doctor Name : </label>
                <input
                  type="text"
                  value={doc}
                  onChange={(e) => setDoc(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="FrameInfo">
          <div className="header">
            <h1>Frame/Other Details</h1>
            <button onClick={(e) => handleFrame(e)}>{framelogo}</button>
          </div>

          {frame && (
            <div className="frame-content">
              <div className="frame">
                <p>Frame</p>
                <div className="frame-input">
                  <div className="framecode">
                    <label>Item:</label>
                    <div className="select-input">
                      <select
                        value={framecode}
                        onChange={(e) => setFramecode(e.target.value)}
                        onClick={() => console.log("hello")}
                      >
                        {selectframe}
                      </select>
                      <input></input>
                    </div>

                    {framecode && <img alt="not found" src={framee} />}
                  </div>

                  <div className="userphoto">
                    {userphoto && (
                      <div className="image">
                        <img
                          alt="not found"
                          src={URL.createObjectURL(userphoto)}
                        />
                        <button
                          type="button"
                          onClick={() => setUserphoto(null)}
                        >
                          Remove
                        </button>
                      </div>
                    )}
                    <input
                      type="file"
                      name="myImage"
                      onChange={(event) => {
                        setUserphoto(event.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="others">
                <p>Others</p>
                <div className="others-input">
                  <div className="item">
                    <label>Item:</label>
                    <div className="select-input">
                      <select
                        value={othercode}
                        onChange={(e) => setOthercode(e.target.value)}
                      >
                        {selectother}
                      </select>
                      <input></input>
                    </div>
                  </div>
                  <div className="quantity">
                    <label>Quantity:</label>
                    <input
                      type="text"
                      size="8"
                      value={otherquant}
                      onChange={(e) => setOtherquant(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="LensInfo">
          <div className="header">
            <h1>Lens</h1>
            <button onClick={(e) => handleLens(e)}>{lenslogo}</button>
          </div>
          {lens && (
            <div className="lens-content">
              <div className="table1">
                <table>
                  <tr>
                    <th>EYE</th>
                    <th>DSPH</th>
                    <th>C.L.Y</th>
                    <th>AXIS</th>
                    <th>ADD</th>
                    <th>P.D.</th>
                    <th>Fitt.Ht.</th>
                    <th>Prism</th>
                    <th>ERCd</th>
                  </tr>
                  <tr>
                    <td>R</td>
                    <td>
                      <input
                        type="text"
                        value={lensrightdsph}
                        onChange={(e) => setLensRightdsph(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensrightcly}
                        onChange={(e) => setLensRightcly(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensrightaxis}
                        onChange={(e) => setLensRightaxis(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensrightadd}
                        onChange={(e) => setLensRightadd(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensrightpd}
                        onChange={(e) => setLensRightpd(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensrightfitt}
                        onChange={(e) => setLensRightfitt(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensrightprism}
                        onChange={(e) => setLensRightprism(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensrightercd}
                        onChange={(e) => setLensRightercd(e.target.value)}
                        size={5}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>
                      <input
                        type="text"
                        value={lensleftdsph}
                        onChange={(e) => setLensLeftdsph(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensleftcly}
                        onChange={(e) => setLensLeftcly(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensleftaxis}
                        onChange={(e) => setLensLeftaxis(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensleftadd}
                        onChange={(e) => setLensLeftadd(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensleftpd}
                        onChange={(e) => setLensLeftpd(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensleftfitt}
                        onChange={(e) => setLensLeftfitt(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensleftprism}
                        onChange={(e) => setLensLeftprism(e.target.value)}
                        size={5}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={lensleftercd}
                        onChange={(e) => setLensLeftercd(e.target.value)}
                        size={5}
                      />
                    </td>
                  </tr>
                </table>
              </div>

              <div className="lens-input">
                <div className="lens-input-a">
                  <div className="flex">
                    <label>Type:</label>

                    <select
                      value={lenstype}
                      onChange={(e) => setLenstype(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="Glass">Glass</option>
                      <option value="Plastic">Plastic</option>
                      <option value="Polycarbonate">Polycarbonate</option>
                    </select>
                  </div>

                  <div className="flex">
                    <label>Power:</label>
                    <select
                      value={lenspow}
                      onChange={(e) => setLenspow(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="Single Vision">Single Vision</option>
                      <option value="Bifocal Progressive">
                        Bifocal Progressive
                      </option>
                      <option value="Bifocal Progressive">Progressive</option>
                    </select>
                  </div>

                  <div className="flex">
                    <label>Anti glare:</label>
                    <select
                      value={glare}
                      onChange={(e) => setGlare(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="flex">
                    <label>Bifocal Type:</label>
                    <select
                      value={bifocal}
                      onChange={(e) => setBifocal(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="D-Type">D-Type</option>
                      <option value="K-Type">K-Type</option>
                      <option value="E-Type">E-Type</option>
                    </select>
                  </div>

                  <div className="flex">
                    <label>Photochromic:</label>
                    <select
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="flex">
                    <label>Anti Scratch:</label>
                    <select
                      value={scratch}
                      onChange={(e) => setScratch(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="flex">
                    <label>Index:</label>
                    <select
                      value={index}
                      onChange={(e) => setIndex(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="1.49">1.49</option>
                      <option value="1.5">1.5</option>
                      <option value="1.56">1.56</option>
                      <option value="1.59">1.59</option>
                      <option value="1.6">1.6</option>
                      <option value="1.61">1.61</option>
                      <option value="1.67">1.67</option>
                      <option value="1.7">1.7</option>
                      <option value="1.74">1.74</option>
                      <option value="1.8">1.8</option>
                      <option value="1.9">1.9</option>
                    </select>
                  </div>

                  <div className="flex">
                    <label>Diameter:</label>
                    <select
                      value={diameter}
                      onChange={(e) => setDiameter(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="55/60">55/60</option>
                      <option value="60/65">60/65</option>
                      <option value="65/70">65/70</option>
                      <option value="70/75">70/75</option>
                      <option value="75/80">75/80</option>
                      <option value="80/85">80/85</option>
                    </select>
                  </div>

                  <div className="flex">
                    <label>Shape:</label>
                    <select
                      value={shape}
                      onChange={(e) => setShape(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="Oblong">Oblong</option>
                      <option value="Oval or Round">Oval or Round</option>
                      <option value="Aviator">Aviator</option>
                      <option value="Cats Eye">Cats Eye</option>
                      <option value="Symetrical Oval">Symetrical oval</option>
                      <option value="Cut Away Rectangle">
                        Cut Away Rectangle
                      </option>
                      <option value="Rectangle">Rectangle</option>
                      <option value="Nasal Cut Away Oval">
                        Nasal Cut Away Oval
                      </option>
                    </select>
                  </div>
                </div>

                <div className="lens-input-b">
                  <div className="table2">
                    <label>Precal:</label>
                    <table>
                      <thead>
                        <tr>
                          <th>A</th>
                          <th>B</th>
                          <th>D</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={precala}
                              onChange={(e) => setPrecala(e.target.value)}
                              size={5}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              value={precalb}
                              onChange={(e) => setPrecalb(e.target.value)}
                              size={5}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              value={precald}
                              onChange={(e) => setPrecald(e.target.value)}
                              size={5}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex">
                    <label>WRAP:</label>
                    <input
                      type="text"
                      value={wrap}
                      onChange={(e) => setWrap(e.target.value)}
                    />
                  </div>

                  <div className="flex">
                    <label>Inclination (Pentoscope):</label>
                    <input
                      type="text"
                      value={inc}
                      onChange={(e) => setInc(e.target.value)}
                    />
                  </div>

                  <div className="flex">
                    <label>Progression length(mm):</label>
                    <input
                      type="text"
                      value={progression}
                      onChange={(e) => setProgression(e.target.value)}
                    />
                  </div>

                  <div className="flex">
                    <label>Reading Distance(cm):</label>
                    <input
                      type="text"
                      value={read}
                      onChange={(e) => setRead(e.target.value)}
                    />
                  </div>

                  <div className="flex">
                    <label>Dominant Eye:</label>
                    <select
                      value={domeye}
                      onChange={(e) => setDomeye(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="Left">Left</option>
                      <option value="Right">Right</option>
                    </select>
                  </div>

                  <div className="flex">
                    <label>Wearer's Behaviour:</label>
                    <select
                      value={wear}
                      onChange={(e) => setWear(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="HE">HE</option>
                      <option value="ST">ST</option>
                    </select>
                  </div>

                  <div className="flex">
                    <label>Manufacturer:</label>
                    <input
                      type="text"
                      value={lensManu}
                      onChange={(e) => setLensManu(e.target.value)}
                    />
                  </div>

                  <div className="flex">
                    <label>Remark:</label>
                    <textarea
                      value={lensRemark}
                      onChange={(e) => setLensRemark(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Billentry;
