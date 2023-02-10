import React, { Fragment } from "react";
import plus from "../img/plus.png";
import minus from "../img/minus.png";
import framee from "../img/Frame.png";
import { useState, useEffect } from "react";
import frames from "../data/required/frame.json"; //get from backend later
import others from "../data/required/others.json"; //get from backend later

const BasicinfoPC = () => {
  let today = new Date().toISOString().slice(0, 10);

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
  const [basiclogo, setBasiclogo] = useState(
    <img style={imgstyle} src={plus} alt="plus" />
  );

  //Frame/Other related variable
  const [frame, setFrame] = useState(false);
  const [framelogo, setFramelogo] = useState(
    <img style={imgstyle} src={plus} alt="plus" />
  );
  const [framecode, setFramecode] = useState("");
  const [framephoto, setFramephoto] = useState(
    <img style={imgstyle} src={plus} alt="plus" />
  );
  const [userphoto, setUserphoto] = useState(null);
  const [selectother, setSelectother] = useState();
  const [selectframe, setSelectframe] = useState();
  const [othercode, setOthercode] = useState("");
  const [otherquant, setOtherquant] = useState("");
  let frameselect = [];
  let otherselect = [];

  //Contact lens related variable

  const [lens, setLens] = useState(false);
  const [lenslogo, setLenslogo] = useState(
    <img style={imgstyle} src={plus} alt="plus" />
  );
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

  //Contact lens related variable
  const [contactlens, setContactlens] = useState(false);
  const [contactlenslogo, setContactlenslogo] = useState(
    <img style={imgstyle} src={plus} alt="plus" />
  );
  const [type, setType] = useState("");
  const [long, setLong] = useState("");
  const [longopt, setLongopt] = useState([
    <option value={"Daily"}>Daily</option>,
    <option value={"Weekly"}>Weekly</option>,
    <option value={"Monthly"}>Monthly</option>,
    <option value={"Yearly"}>Yearly</option>,
  ]);
  const [col, setCol] = useState("");
  const [enablecol, setEnablecol] = useState(true);
  const [remark, setRemark] = useState("");
  const [manu, setManu] = useState("");
  const [rightdsph, setRightdsph] = useState("");
  const [rightcly, setRightcly] = useState("");
  const [rightaxis, setRightaxis] = useState("");
  const [rightadd, setRightadd] = useState("");
  const [rightqnt, setRightqnt] = useState("");
  const [leftdsph, setLeftdsph] = useState("");
  const [leftcly, setLeftcly] = useState("");
  const [leftaxis, setLeftaxis] = useState("");
  const [leftadd, setLeftadd] = useState("");
  const [leftqnt, setLeftqnt] = useState("");

  //Price breakup related variables
  const [pricebreak, setPricebreak] = useState(false);
  const [pricebreaklogo, setPricebreaklogo] = useState(
    <img style={imgstyle} src={plus} alt="plus" />
  );
  const [frameprice, setFrameprice] = useState(0.0);
  const [framegst, setFramegst] = useState(0.0);
  const [framediscount, setFramediscount] = useState(0.0);
  const [otherprice, setOtherprice] = useState(0.0);
  const [othergst, setOthergst] = useState(0.0);
  const [otherdiscount, setOtherdiscount] = useState(0.0);
  const [lensprice, setLensprice] = useState(0.0);
  const [lensgst, setLensgst] = useState(0.0);
  const [lensdiscount, setLensdiscount] = useState(0.0);
  const [contactprice, setContactprice] = useState(0.0);
  const [contactgst, setContactgst] = useState(0.0);
  const [contactdiscount, setContactdiscount] = useState(0.0);
  const [amountbeforediscount, setAmountbeforediscount] = useState(0.0);
  const [amountafterdiscount, setAmountafterdiscount] = useState(0.0);
  const [discount, setDiscount] = useState(0.0);
  const [cgst, setCgst] = useState(0.0);
  const [sgst, setSgst] = useState(0.0);
  const [totalamount, setTotalamount] = useState(0.0);
  const [advancedpayment, setAdvancedpayment] = useState(0.0);
  const [purchasetype, setPurchasetype] = useState("Composite");
  const [gstdisable, setGstdisable] = useState(true);

  //Basic info related function

  function handleBasic(e) {
    if (basic) {
      setBasiclogo(<img style={imgstyle} src={plus} alt="plus" />);
      setBasic(false);
    } else {
      setBasiclogo(<img style={imgstyle} src={minus} alt="minus" />);
      setBasic(true);
    }
  }

  //Frame/Other related function

  function handleFrame(e) {
    if (frame) {
      setFramelogo(<img style={imgstyle} src={plus} alt="minus" />);
      setFrame(false);
    } else {
      setFramelogo(<img style={imgstyle} src={minus} alt="plus" />);
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
      setLenslogo(<img style={imgstyle} src={plus} alt="plus" />);
      setLens(false);
    } else {
      setLenslogo(<img style={imgstyle} src={minus} alt="minus" />);
      setLens(true);
    }
  }

  //Contact lens related function

  function handleContactlens(e) {
    if (contactlens) {
      setContactlenslogo(<img style={imgstyle} src={plus} alt="plus" />);
      setContactlens(false);
    } else {
      setContactlenslogo(<img style={imgstyle} src={minus} alt="minus" />);
      setContactlens(true);
    }
  }

  function handleType(e) {
    setType(e.target.value);
    //Reversed because of delay in set function
    if (e.target.value === "White" || e.target.value === "") {
      setEnablecol(true);
      setLongopt([
        <option value={"Daily"}>Daily</option>,
        <option value={"Weekly"}>Weekly</option>,
        <option value={"Monthly"}>Monthly</option>,
        <option value={"Yearly"}>Yearly</option>,
      ]);
    } else {
      setEnablecol(false);
      setLongopt([
        <option value={"Monthly"}>Monthly</option>,
        <option value={"Yearly"}>Yearly</option>,
      ]);
    }
  }

  //Price breakup related function

  function handlePricebreak(e) {
    if (pricebreak) {
      setPricebreaklogo(<img style={imgstyle} src={plus} alt="plus" />);
      setPricebreak(false);
    } else {
      setPricebreaklogo(<img style={imgstyle} src={minus} alt="minus" />);
      setPricebreak(true);
    }
  }

  function handleAmt(e) {
    e.preventDefault();

    if (
      isNaN(parseFloat(frameprice)) ||
      isNaN(parseFloat(otherprice)) ||
      isNaN(parseFloat(lensprice)) ||
      isNaN(parseFloat(contactprice)) ||
      isNaN(parseFloat(framegst)) ||
      isNaN(parseFloat(othergst)) ||
      isNaN(parseFloat(lensgst)) ||
      isNaN(parseFloat(contactgst)) ||
      isNaN(parseFloat(framediscount)) ||
      isNaN(parseFloat(otherdiscount)) ||
      isNaN(parseFloat(lensdiscount)) ||
      isNaN(parseFloat(contactdiscount))
    ) {
      console.log("letters detected");
      return;
    }

    const tamount =
      parseFloat(frameprice) +
      parseFloat(otherprice) +
      parseFloat(lensprice) +
      parseFloat(contactprice);
    const tdis =
      parseFloat(framediscount) +
      parseFloat(otherdiscount) +
      parseFloat(lensdiscount) +
      parseFloat(contactdiscount);
    const framegstamt =
      (parseFloat(frameprice) - parseFloat(framediscount)) *
      (parseFloat(framegst) / 100);
    const othergstamt =
      (parseFloat(otherprice) - parseFloat(otherdiscount)) *
      (parseFloat(othergst) / 100);
    const lensgstamt =
      (parseFloat(lensprice) - parseFloat(lensdiscount)) *
      (parseFloat(lensgst) / 100);
    const contactgstamt =
      (parseFloat(contactprice) - parseFloat(contactdiscount)) *
      (parseFloat(contactgst) / 100);
    const totalgst = framegstamt + othergstamt + lensgstamt + contactgstamt;

    setAmountbeforediscount(tamount);
    setDiscount(tdis);
    setAmountafterdiscount(tamount - tdis);
    setSgst(totalgst / 2);
    setCgst(totalgst / 2);
    setTotalamount(tamount - tdis + totalgst);
  }

  function handlePurchaseType(e) {
    setPurchasetype(e.target.value);

    if (e.target.value === "Composite") {
      setGstdisable(true);
    } else {
      setGstdisable(false);
    }
  }

  return (
    <div style={container}>
      <div style={header}>
        <h3>Basic info</h3>
        <button
          style={{ backgroundColor: "gray", borderWidth: "0" }}
          onClick={(e) => handleBasic(e)}
        >
          {basiclogo}
        </button>
      </div>
      {basic ? (
        <div>
          <form>
            <label style={entry}>
              Date of Delivery:
              <input
                style={entry}
                type="date"
                value={dod}
                onChange={(e) => setDod(e.target.value)}
              />
            </label>
            <label style={entry}>
              Delivery At:
              <input
                style={entry}
                type="text"
                size="25"
                value={delat}
                onChange={(e) => setDelat(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              Coupon No:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                type="text"
                size="13"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                type="text"
                size="51"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              Address:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <textarea
                style={entry}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={5}
                cols={50}
              />
            </label>
            <br />
            <label style={entry}>
              Mobile No: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                type="text"
                size="12"
                value={mob}
                onChange={(e) => setMob(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              Date of Birth: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                type="date"
                max={today}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </label>
            <label style={entry}>
              Date of Anniversary:
              <input
                style={entry}
                type="date"
                max={today}
                value={doa}
                onChange={(e) => setDoa(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              Doctor Name: &nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                type="text"
                size="51"
                value={doc}
                onChange={(e) => setDoc(e.target.value)}
              />
            </label>
          </form>
        </div>
      ) : (
        <></>
      )}

      <div style={header}>
        <h3>Frame/Other Details</h3>
        <button
          style={{ backgroundColor: "gray", borderWidth: "0" }}
          onClick={(e) => handleFrame(e)}
        >
          {framelogo}
        </button>
      </div>
      {frame ? (
        <div>
          <form>
            <p style={{ display: "flex", justifyContent: "center" }}>
              -------------------------Frame--------------------------
            </p>
            <hr color="black" />
            <label style={entry}>
              Code: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                type="text"
                size="8"
                disabled={true}
                value={framecode}
              />
            </label>
            <label style={entry}>
              Item:
              <select
                style={entry}
                value={framecode}
                onChange={(e) => setFramecode(e.target.value)}
                onClick={() => console.log("hello")}
              >
                {selectframe}
              </select>
            </label>
            {framecode && (
              <img
                style={pic}
                alt="not found"
                src={framee}
                height={"64px"}
                width={"64px"}
              />
            )}
            <br />
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
                  alt="not found"
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
            <br />
            <br />
            <input
              style={entry}
              type="file"
              name="myImage"
              onChange={(event) => {
                setUserphoto(event.target.files[0]);
              }}
            />
          </form>
          <form>
            <p style={{ display: "flex", justifyContent: "center" }}>
              -------------------------Others--------------------------
            </p>
            <hr color="black" />
            <label style={entry}>
              Code: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                type="text"
                size="8"
                disabled={true}
                value={othercode}
              />
            </label>
            <label style={entry}>
              Item:
              <select
                style={entry}
                value={othercode}
                onChange={(e) => setOthercode(e.target.value)}
              >
                {selectother}
              </select>
            </label>
            <br />
            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantity:
              <input
                style={entry}
                type="text"
                size="8"
                value={otherquant}
                onChange={(e) => setOtherquant(e.target.value)}
              />
            </label>
          </form>
        </div>
      ) : (
        <></>
      )}

      <div style={header}>
        <h3>Lens</h3>
        <button
          style={{ backgroundColor: "gray", borderWidth: "0" }}
          onClick={(e) => handleLens(e)}
        >
          {lenslogo}
        </button>
      </div>
      {lens ? (
        <div>
          <form>
            <table style={tablestyle}>
              <tr>
                <th style={rowstyle}>EYE</th>
                <th style={rowstyle}>DSPH</th>
                <th style={rowstyle}>C.L.Y</th>
                <th style={rowstyle}>AXIS</th>
                <th style={rowstyle}>ADD</th>
                <th style={rowstyle}>P.D.</th>
                <th style={rowstyle}>Fitt.Ht.</th>
                <th style={rowstyle}>Prism</th>
                <th style={rowstyle}>ERCd</th>
              </tr>
              <tr>
                <td style={rowstyle}>Right</td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensrightdsph}
                    onChange={(e) => setLensRightdsph(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensrightcly}
                    onChange={(e) => setLensRightcly(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensrightaxis}
                    onChange={(e) => setLensRightaxis(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensrightadd}
                    onChange={(e) => setLensRightadd(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensrightpd}
                    onChange={(e) => setLensRightpd(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensrightfitt}
                    onChange={(e) => setLensRightfitt(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensrightprism}
                    onChange={(e) => setLensRightprism(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensrightercd}
                    onChange={(e) => setLensRightercd(e.target.value)}
                    size={5}
                  />
                </td>
              </tr>
              <tr>
                <td style={rowstyle}>Left</td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensleftdsph}
                    onChange={(e) => setLensLeftdsph(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensleftcly}
                    onChange={(e) => setLensLeftcly(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensleftaxis}
                    onChange={(e) => setLensLeftaxis(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensleftadd}
                    onChange={(e) => setLensLeftadd(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensleftpd}
                    onChange={(e) => setLensLeftpd(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensleftfitt}
                    onChange={(e) => setLensLeftfitt(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensleftprism}
                    onChange={(e) => setLensLeftprism(e.target.value)}
                    size={5}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={lensleftercd}
                    onChange={(e) => setLensLeftercd(e.target.value)}
                    size={5}
                  />
                </td>
              </tr>
            </table>

            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select
                style={entry}
                value={lenstype}
                onChange={(e) => setLenstype(e.target.value)}
              >
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </option>
                <option value="Glass">Glass</option>
                <option value="Plastic">Plastic</option>
                <option value="Polycarbonate">Polycarbonate</option>
              </select>
            </label>

            <table style={precaltable}>
              <thead>
                <tr>
                  <th></th>
                  <th style={rowstyle}>A</th>
                  <th style={rowstyle}>B</th>
                  <th style={rowstyle}>D</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={rowstyle}>Precal</td>
                  <td style={rowstyle}>
                    <input
                      type="text"
                      style={tableinput}
                      value={precala}
                      onChange={(e) => setPrecala(e.target.value)}
                      size={5}
                    />
                  </td>
                  <td style={rowstyle}>
                    <input
                      type="text"
                      style={tableinput}
                      value={precalb}
                      onChange={(e) => setPrecalb(e.target.value)}
                      size={5}
                    />
                  </td>
                  <td style={rowstyle}>
                    <input
                      type="text"
                      style={tableinput}
                      value={precald}
                      onChange={(e) => setPrecald(e.target.value)}
                      size={5}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <br />

            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Power:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select
                style={entry}
                value={lenspow}
                onChange={(e) => setLenspow(e.target.value)}
              >
                <option value=""></option>
                <option value="Single Vision">Single Vision</option>
                <option value="Bifocal Progressive">Bifocal Progressive</option>
                <option value="Bifocal Progressive">Progressive</option>
              </select>
            </label>

            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WRAP:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                size={15}
                style={entry}
                value={wrap}
                onChange={(e) => setWrap(e.target.value)}
              />
            </label>

            <br />
            <label style={entry}>
              &nbsp;&nbsp;Anti glare:&nbsp;&nbsp;&nbsp;&nbsp;
              <select
                style={entry}
                value={glare}
                onChange={(e) => setGlare(e.target.value)}
              >
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            <label style={entry}>
              Inclination (Pentoscope):&nbsp;
              <input
                type="text"
                size={15}
                style={entry}
                value={inc}
                onChange={(e) => setInc(e.target.value)}
              />
            </label>
            <br />

            <label style={entry}>
              Bifocal Type:&nbsp;&nbsp;&nbsp;
              <select
                style={entry}
                value={bifocal}
                onChange={(e) => setBifocal(e.target.value)}
              >
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </option>
                <option value="D-Type">D-Type</option>
                <option value="K-Type">K-Type</option>
                <option value="E-Type">E-Type</option>
              </select>
            </label>

            <label style={entry}>
              Progression length(mm):
              <input
                type="text"
                size={15}
                style={entry}
                value={progression}
                onChange={(e) => setProgression(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              Photochromic:
              <select
                style={entry}
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              >
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            <label style={entry}>
              &nbsp;&nbsp;Reading Distance(cm):&nbsp;&nbsp;
              <input
                type="text"
                size={15}
                style={entry}
                value={read}
                onChange={(e) => setRead(e.target.value)}
              />
            </label>

            <br />
            <label style={entry}>
              &nbsp;&nbsp;Anti Scratch:&nbsp;
              <select
                style={entry}
                value={scratch}
                onChange={(e) => setScratch(e.target.value)}
              >
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dominant
              Eye:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select
                style={entry}
                value={domeye}
                onChange={(e) => setDomeye(e.target.value)}
              >
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </option>
                <option value="Left">Left</option>
                <option value="Right">Right</option>
              </select>
            </label>
            <br />
            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Index:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select
                style={entry}
                value={index}
                onChange={(e) => setIndex(e.target.value)}
              >
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </option>
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
            </label>
            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;Wearer's
              Behaviour:&nbsp;&nbsp;&nbsp;&nbsp;
              <select
                style={entry}
                value={wear}
                onChange={(e) => setWear(e.target.value)}
              >
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </option>
                <option value="HE">HE</option>
                <option value="ST">ST</option>
              </select>
            </label>

            <br />
            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;Diameter:&nbsp;&nbsp;&nbsp;&nbsp;
              <select
                style={entry}
                value={diameter}
                onChange={(e) => setDiameter(e.target.value)}
              >
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </option>
                <option value="55/60">55/60</option>
                <option value="60/65">60/65</option>
                <option value="65/70">65/70</option>
                <option value="70/75">70/75</option>
                <option value="75/80">75/80</option>
                <option value="80/85">80/85</option>
              </select>
            </label>

            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacturer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                size={15}
                style={entry}
                value={lensManu}
                onChange={(e) => setLensManu(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shape:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select
                style={entry}
                value={shape}
                onChange={(e) => setShape(e.target.value)}
              >
                <option value="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                <option value="Oblong">Oblong</option>
                <option value="Oval or Round">Oval or Round</option>
                <option value="Aviator">Aviator</option>
                <option value="Cats Eye">Cats Eye</option>
                <option value="Symetrical Oval">Symetrical oval</option>
                <option value="Cut Away Rectangle">Cut Away Rectangle</option>
                <option value="Rectangle">Rectangle</option>
                <option value="Nasal Cut Away Oval">Nasal Cut Away Oval</option>
              </select>
            </label>
            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remark:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <textarea
                rows={4}
                cols={17}
                style={entry}
                value={lensRemark}
                onChange={(e) => setLensRemark(e.target.value)}
              />
            </label>
          </form>
        </div>
      ) : (
        <></>
      )}

      <div style={header}>
        <h3>Contact Lens</h3>
        <button
          style={{ backgroundColor: "gray", borderWidth: "0" }}
          onClick={(e) => handleContactlens(e)}
        >
          {contactlenslogo}
        </button>
      </div>
      {contactlens ? (
        <div>
          <form>
            <label style={entry}>
              Type:
              <select
                style={entry}
                value={type}
                onChange={(e) => handleType(e)}
              >
                <option value=""></option>
                <option value="White">White</option>
                <option value="Color">Color</option>
              </select>
            </label>
            <label style={entry}>
              Longitivity:
              <select
                style={entry}
                value={long}
                onChange={(e) => setLong(e.target.value)}
              >
                {longopt}
              </select>
            </label>
            <label style={entry}>
              Color:
              <input
                type="text"
                size={15}
                disabled={enablecol}
                value={col}
                onChange={(e) => setCol(e.target.value)}
                style={entry}
              />
            </label>
            <table style={tablestyle}>
              <tr>
                <th style={rowstyle}>EYE</th>
                <th style={rowstyle}>DSPH</th>
                <th style={rowstyle}>C.L.Y</th>
                <th style={rowstyle}>AXIS</th>
                <th style={rowstyle}>ADD</th>
                <th style={rowstyle}>QUANTITY</th>
              </tr>
              <tr>
                <td style={rowstyle}>Right</td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={rightdsph}
                    onChange={(e) => setRightdsph(e.target.value)}
                    size={10}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={rightcly}
                    onChange={(e) => setRightcly(e.target.value)}
                    size={10}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={rightaxis}
                    onChange={(e) => setRightaxis(e.target.value)}
                    size={10}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={rightadd}
                    onChange={(e) => setRightadd(e.target.value)}
                    size={10}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={rightqnt}
                    onChange={(e) => setRightqnt(e.target.value)}
                    size={10}
                  />
                </td>
              </tr>
              <tr>
                <td style={rowstyle}>Left</td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={leftdsph}
                    onChange={(e) => setLeftdsph(e.target.value)}
                    size={10}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={leftcly}
                    onChange={(e) => setLeftcly(e.target.value)}
                    size={10}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={leftaxis}
                    onChange={(e) => setLeftaxis(e.target.value)}
                    size={10}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={leftadd}
                    onChange={(e) => setLeftadd(e.target.value)}
                    size={10}
                  />
                </td>
                <td style={rowstyle}>
                  <input
                    type="text"
                    style={tableinput}
                    value={leftqnt}
                    onChange={(e) => setLeftqnt(e.target.value)}
                    size={10}
                  />
                </td>
              </tr>
            </table>
            <label style={entry}>
              Manufacturer:
              <input
                type="text"
                size={30}
                value={manu}
                onChange={(e) => setManu(e.target.value)}
                style={entry}
              />
            </label>
            <br />
            <label style={entry}>
              Remarks:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <textarea
                style={entry}
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                rows="5"
                cols={31}
              />
            </label>
          </form>
        </div>
      ) : (
        <></>
      )}

      <div style={header}>
        <h3>Price Breakup</h3>
        <button
          style={{ backgroundColor: "gray", borderWidth: "0" }}
          onClick={(e) => handlePricebreak(e)}
        >
          {pricebreaklogo}
        </button>
      </div>
      {pricebreak ? (
        <div>
          <form>
            {framecode ? (
              <div>
                <p style={{ display: "flex", justifyContent: "center" }}>
                  Frame
                </p>
                <hr color="black" />
                <label style={entry}>
                  &nbsp;&nbsp;&nbsp;&nbsp;GST%:
                  <input
                    style={entry}
                    type="text"
                    disabled={gstdisable}
                    size={10}
                    value={framegst}
                    onChange={(e) => setFramegst(e.target.value)}
                  />
                </label>
                <label style={entry}>
                  Amount:
                  <input
                    style={entry}
                    type="text"
                    size={10}
                    value={frameprice}
                    onChange={(e) => setFrameprice(e.target.value)}
                  />
                </label>
                <label style={entry}>
                  Discount:
                  <input
                    style={entry}
                    type="text"
                    size={10}
                    value={framediscount}
                    onChange={(e) => setFramediscount(e.target.value)}
                  />
                </label>
              </div>
            ) : (
              <></>
            )}
            {othercode ? (
              <div>
                <p style={{ display: "flex", justifyContent: "center" }}>
                  Other
                </p>
                <hr color="black" />
                <label style={entry}>
                  &nbsp;&nbsp;&nbsp;&nbsp;GST%:
                  <input
                    style={entry}
                    type="text"
                    size={10}
                    disabled={gstdisable}
                    value={othergst}
                    onChange={(e) => setOthergst(e.target.value)}
                  />
                </label>
                <label style={entry}>
                  Amount:
                  <input
                    style={entry}
                    type="text"
                    size={10}
                    value={otherprice}
                    onChange={(e) => setOtherprice(e.target.value)}
                  />
                </label>
                <label style={entry}>
                  Discount:
                  <input
                    style={entry}
                    type="text"
                    size={10}
                    value={otherdiscount}
                    onChange={(e) => setOtherdiscount(e.target.value)}
                  />
                </label>
              </div>
            ) : (
              <></>
            )}
            {lenstype ? (
              <div>
                <p style={{ display: "flex", justifyContent: "center" }}>
                  Lens
                </p>
                <hr color="black" />
                <label style={entry}>
                  &nbsp;&nbsp;&nbsp;&nbsp;GST%:
                  <input
                    style={entry}
                    type="text"
                    size={10}
                    disabled={gstdisable}
                    value={lensgst}
                    onChange={(e) => setLensgst(e.target.value)}
                  />
                </label>
                <label style={entry}>
                  Amount:
                  <input
                    style={entry}
                    type="text"
                    size={10}
                    value={lensprice}
                    onChange={(e) => setLensprice(e.target.value)}
                  />
                </label>
                <label style={entry}>
                  Discount:
                  <input
                    style={entry}
                    type="text"
                    size={10}
                    value={lensdiscount}
                    onChange={(e) => setLensdiscount(e.target.value)}
                  />
                </label>
              </div>
            ) : (
              <></>
            )}
            {type ? (
              <div>
                <p style={{ display: "flex", justifyContent: "center" }}>
                  Contact Lens
                </p>
                <hr color="black" />
                <label style={entry}>
                  &nbsp;&nbsp;&nbsp;&nbsp;GST%:
                  <input
                    style={entry}
                    type="text"
                    size={10}
                    disabled={gstdisable}
                    value={contactgst}
                    onChange={(e) => setContactgst(e.target.value)}
                  />
                </label>
                <label style={entry}>
                  Amount:
                  <input
                    style={entry}
                    type="text"
                    size={10}
                    value={contactprice}
                    onChange={(e) => setContactprice(e.target.value)}
                  />
                </label>
                <label style={entry}>
                  Discount:
                  <input
                    style={entry}
                    type="text"
                    size={10}
                    value={contactdiscount}
                    onChange={(e) => setContactdiscount(e.target.value)}
                  />
                </label>
              </div>
            ) : (
              <></>
            )}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <select
                style={entry}
                value={purchasetype}
                onChange={(e) => handlePurchaseType(e)}
              >
                <option value="Composite">Composite</option>
                <option value="Excluding Tax">Excluding Tax</option>
                <option value="Including Tax">Including Tax</option>
              </select>
              <button style={buttonstyle} onClick={(e) => handleAmt(e)}>
                Calculate
              </button>
            </div>
          </form>
          <form>
            <label style={entry}>
              Total Amount(Before Discount):
              <input
                style={entry}
                disabled={true}
                type="text"
                size={6}
                value={amountbeforediscount}
                onChange={(e) => setAmountbeforediscount(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                disabled={true}
                type="text"
                size={6}
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              &nbsp;Total Amount(After Discount):&nbsp;
              <input
                style={entry}
                disabled={true}
                type="text"
                size={6}
                value={amountafterdiscount}
                onChange={(e) => setAmountafterdiscount(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CGST:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                disabled={true}
                type="text"
                size={6}
                value={cgst}
                onChange={(e) => setCgst(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SGST:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                disabled={true}
                type="text"
                size={6}
                value={sgst}
                onChange={(e) => setSgst(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total
              Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                disabled={true}
                type="text"
                size={6}
                value={totalamount}
                onChange={(e) => setTotalamount(e.target.value)}
              />
            </label>
            <br />
            <label style={entry}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advanced
              Payment:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                style={entry}
                type="text"
                size={6}
                value={advancedpayment}
                onChange={(e) => setAdvancedpayment(e.target.value)}
              />
            </label>
            <br />
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const container = {
  display: "flex",
  flexDirection: "column",
  paddingRight: "5%",
  paddingLeft: "5%",
  // alignItems: 'center',
  // justifyContent: 'center',
  width: "100%",
};

const header = {
  display: "flex",
  paddingTop: "1%",
  paddingBottom: "1%",
  paddingLeft: "3%",
  paddingRight: "8%",
  // alignItems: 'center',
  justifyContent: "space-between",
  borderBottom: "4px solid black",
};

const imgstyle = {
  height: "30px",
  width: "30px",
};

const entry = {
  marginLeft: "1%",
  marginRight: "3%",
  marginTop: "1%",
  marginBottom: "1%",
  padding: "0.25%",
  verticalAlign: "middle",
};

const tablestyle = {
  padding: "1.5%",
  verticalAlign: "middle",
  textAlign: "center",
  borderSpacing: "1px",
  maxHeight: "200px",
};

const precaltable = {
  padding: "1.5%",
  verticalAlign: "middle",
  textAlign: "center",
  borderSpacing: "1px",
  maxHeight: "200px",
  display: "inline-block",
  marginLeft: "10.5%",
};

const rowstyle = {
  border: "2px solid black",
};

const tableinput = {
  height: "20px",
  textAlign: "center",
};

const buttonstyle = {
  border: "2px solid black",
  margin: "2%",
  padding: ".5rem 1.5rem",
  height: "40px",
  width: "100px",
};

const pic = {
  transform: "translateY(2rem)",
};
const pic2 = {
  objectFit: "cover",
  objectPosition: "center top",
};
export default BasicinfoPC;
