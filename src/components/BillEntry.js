import React from "react";
import plus from "../img/plus.png";
import minus from "../img/minus.png";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

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
  const [otherdata, setOtherdata] = useState();
  const [framedata, setFramedata] = useState();
  const [frametyping, setFrametyping] = useState("");
  const [othertyping, setOthertyping] = useState("");
  const [userphoto, setUserphoto] = useState(null);
  const [selectother, setSelectother] = useState();
  const [selectframe, setSelectframe] = useState();
  const [othercode, setOthercode] = useState("");
  const [otherquant, setOtherquant] = useState("");
  let frameselect = [];
  let otherselect = [];
  const [framephoto, setFramephoto] = useState();

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

  //Contact lens related variable
  const [contactlens, setContactlens] = useState(false);
  const [contactlenslogo, setContactlenslogo] = useState(
    <img src={plus} alt="plus" />
  );
  const [type, setType] = useState("");
  const [long, setLong] = useState("");
  const [longopt, setLongopt] = useState([
    <option key="0" value=""></option>,
    <option key="1" value={"Daily"}>
      Daily
    </option>,
    <option key="2" value={"Weekly"}>
      Weekly
    </option>,
    <option key="3" value={"Monthly"}>
      Monthly
    </option>,
    <option key="4" value={"Yearly"}>
      Yearly
    </option>,
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
    <img src={plus} alt="plus" />
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
  const [paymentwith, setPaymentwith] = useState("");
  const [calculated, setCalculated] = useState(false);

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

  function handleOtherCode(e) {
    setOthercode(otherdata[e.target.value].other_code);
    setOthertyping(otherdata[e.target.value].other_name);
    setOtherprice(otherdata[e.target.value].other_price);
  }

  function handleFrameCode(e) {
    setFramecode(framedata[e.target.value].frame_code);
    setFrametyping(framedata[e.target.value].frame_name);
    setFramephoto(
      <img
        src={`http://192.168.0.169:8000/media/${
          framedata[e.target.value].frame_pic
        }`}
        alt=""
      />
    );
    setFrameprice(framedata[e.target.value].frame_price);
  }

  function handleOtherquant(e) {
    if (isNaN(parseFloat(e.target.value))) {
      if (isNaN(parseFloat(otherquant))) {
        setOtherprice(parseFloat(otherprice) / 1);
      } else {
        setOtherprice(parseFloat(otherprice) / parseFloat(otherquant));
      }
      setOtherquant(e.target.value);
      return;
    }
    setOtherquant(e.target.value);
    setOtherprice(parseFloat(otherprice) * parseFloat(e.target.value));
  }

  useEffect(() => {
    async function setOthers() {
      // eslint-disable-next-line
      otherselect = [<option key="0" value=""></option>];
      let res = await axios.get(
        `http://192.168.0.169:8000/api/getother/${othertyping}`
      );
      setOtherdata(res.data);
      for (let i = 0; i < res.data.length; i++) {
        otherselect.push(
          <option key={res.data[i].other_code} value={i}>
            {res.data[i].other_name}
          </option>
        );
      }
      setSelectother(otherselect);
    }
    if (othertyping) {
      setOthers();
    }
    // eslint-disable-next-line
  }, [othertyping]);

  useEffect(() => {
    async function setFrames() {
      // eslint-disable-next-line
      frameselect = [<option key="0" value=""></option>];
      let res = await axios.get(
        `http://192.168.0.169:8000/api/getframe/${frametyping}`
      );
      for (let i = 0; i < res.data.length; i++) {
        frameselect.push(
          <option key={res.data[i].frame_code} value={i}>
            {res.data[i].frame_name}
          </option>
        );
      }
      setFramedata(res.data);
      setSelectframe(frameselect);
    }
    if (frametyping) {
      setFrames();
    }
    // eslint-disable-next-line
  }, [frametyping]);

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

  //Contact lens related function

  function handleContactlens(e) {
    if (contactlens) {
      setContactlenslogo(<img src={plus} alt="plus" />);
      setContactlens(false);
    } else {
      setContactlenslogo(<img src={minus} alt="minus" />);
      setContactlens(true);
    }
  }

  function handleType(e) {
    setType(e.target.value);
    //Reversed because of delay in set function
    if (e.target.value === "White" || e.target.value === "") {
      setEnablecol(true);
      setLongopt([
        <option key="0" value=""></option>,
        <option key="1" value={"Daily"}>
          Daily
        </option>,
        <option key="2" value={"Weekly"}>
          Weekly
        </option>,
        <option key="3" value={"Monthly"}>
          Monthly
        </option>,
        <option key="4" value={"Yearly"}>
          Yearly
        </option>,
      ]);
    } else {
      setEnablecol(false);
      setLongopt([
        <option key="0" value=""></option>,
        <option key="1" value={"Monthly"}>
          Monthly
        </option>,
        <option key="2" value={"Yearly"}>
          Yearly
        </option>,
      ]);
    }
  }

  //Price breakup related function

  function handlePricebreak(e) {
    if (pricebreak) {
      setPricebreaklogo(<img src={plus} alt="plus" />);
      setPricebreak(false);
    } else {
      setPricebreaklogo(<img src={minus} alt="minus" />);
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
    setCalculated(true);
  }

  function handlePurchaseType(e) {
    setPurchasetype(e.target.value);

    if (e.target.value === "Composite") {
      setGstdisable(true);
    } else {
      setGstdisable(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await axios
      .post(
        "http://192.168.0.169:8000/api/entry/",
        {
          dod: dod,
          delat: delat,
          coupon: coupon,
          name: name,
          address: address,
          mobile: mob,
          dob: dob,
          doa: doa,
          doctor_name: doc,
          frame_code: framecode,
          wearer_photo: userphoto,
          other_code: othercode,
          other_qty: otherquant,
          right_dsph: lensrightdsph,
          right_cly: lensrightcly,
          right_axis: lensrightaxis,
          right_add: lensrightadd,
          right_pd: lensrightpd,
          right_fitt: lensrightfitt,
          right_prism: lensrightprism,
          right_ercd: lensrightercd,
          left_dsph: lensleftdsph,
          left_cly: lensleftcly,
          left_axis: lensleftaxis,
          left_add: lensleftadd,
          left_pd: lensleftpd,
          left_fitt: lensleftfitt,
          left_prism: lensleftprism,
          left_ercd: lensleftercd,
          lens_type: lenstype,
          lens_power: lenspow,
          antiglare: glare,
          bifocal_type: bifocal,
          photochromatic: photo,
          antiscratch: scratch,
          index: index,
          diameter: diameter,
          shape: shape,
          precal_a: precala,
          precal_b: precalb,
          precal_d: precald,
          wrap: wrap,
          inclination: inc,
          progression: progression,
          reading: read,
          dominant_eye: domeye,
          wearer_behav: wear,
          lens_manu: lensManu,
          lens_remarks: lensRemark,
          contact_type: type,
          longitivity: long,
          con_color: col,
          con_right_dsph: rightdsph,
          con_right_cly: rightcly,
          con_right_axis: rightaxis,
          con_right_add: rightadd,
          con_right_quant: rightqnt,
          con_left_dsph: leftdsph,
          con_left_cly: leftcly,
          con_left_axis: leftaxis,
          con_left_add: leftadd,
          con_left_quant: leftqnt,
          con_manu: manu,
          con_remarks: remark,
          purchase_type: purchasetype,
          frame_price: frameprice,
          frame_gst: framegst,
          frame_discount: framediscount,
          other_price: otherprice,
          other_gst: othergst,
          other_discount: otherdiscount,
          lens_price: lensprice,
          lens_gst: lensgst,
          lens_discount: lensdiscount,
          contact_lens_price: contactprice,
          contact_lens_gst: contactgst,
          contact_lens_discount: contactdiscount,
          amt_before_discount: amountbeforediscount,
          total_discount: discount,
          amt_after_discount: amountafterdiscount,
          cgst: cgst,
          sgst: sgst,
          amt_after_tax: totalamount,
          advanced_payment: advancedpayment,
          payment_method: paymentwith,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
                        onChange={(e) => handleFrameCode(e)}
                      >
                        {selectframe}
                      </select>
                      <input
                        value={frametyping}
                        onChange={(e) => setFrametyping(e.target.value)}
                      />
                    </div>

                    {framecode && framephoto}
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
                      id="imgupload"
                      type="file"
                      name="myImage"
                      accept="image/jpeg,image/png,image"
                      style={{ display: "none" }}
                      onChange={(event) => {
                        setUserphoto(event.target.files[0]);
                      }}
                    />
                    <div className="image-label">
                      <button>
                        <label htmlFor="imgupload">Upload Image</label>
                      </button>
                    </div>
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
                        onChange={(e) => handleOtherCode(e)}
                      >
                        {selectother}
                      </select>
                      <input
                        value={othertyping}
                        onChange={(e) => setOthertyping(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="quantity">
                    <label>Quantity:</label>
                    <input
                      type="text"
                      size="8"
                      value={otherquant}
                      onChange={(e) => handleOtherquant(e)}
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
                  <thead>
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
                  </thead>
                  <tbody>
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
                  </tbody>
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

      <section>
        <div className="ContactLensInfo">
          <div className="header">
            <h1>Contact Lens</h1>
            <button onClick={(e) => handleContactlens(e)}>
              {contactlenslogo}
            </button>
          </div>

          {contactlens && (
            <div className="contactlens-content">
              <div className="row">
                <div className="type">
                  <label>Type:</label>
                  <select value={type} onChange={(e) => handleType(e)}>
                    <option value=""></option>
                    <option value="White">White</option>
                    <option value="Color">Color</option>
                  </select>
                </div>

                <div className="longitivity">
                  <label>Longitivity:</label>
                  <select
                    value={long}
                    onChange={(e) => setLong(e.target.value)}
                  >
                    {longopt}
                  </select>
                </div>

                <div className="color">
                  <label>Color:</label>
                  <input
                    type="text"
                    disabled={enablecol}
                    value={col}
                    onChange={(e) => setCol(e.target.value)}
                  />
                </div>
              </div>

              <div className="table3">
                <table>
                  <thead>
                    <tr>
                      <th>EYE</th>
                      <th>DSPH</th>
                      <th>C.L.Y</th>
                      <th>AXIS</th>
                      <th>ADD</th>
                      <th>QUANTITY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>R</td>
                      <td>
                        <input
                          type="text"
                          value={rightdsph}
                          onChange={(e) => setRightdsph(e.target.value)}
                          size={10}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={rightcly}
                          onChange={(e) => setRightcly(e.target.value)}
                          size={10}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={rightaxis}
                          onChange={(e) => setRightaxis(e.target.value)}
                          size={10}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={rightadd}
                          onChange={(e) => setRightadd(e.target.value)}
                          size={10}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={rightqnt}
                          onChange={(e) => setRightqnt(e.target.value)}
                          size={10}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>
                        <input
                          type="text"
                          value={leftdsph}
                          onChange={(e) => setLeftdsph(e.target.value)}
                          size={10}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={leftcly}
                          onChange={(e) => setLeftcly(e.target.value)}
                          size={10}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={leftaxis}
                          onChange={(e) => setLeftaxis(e.target.value)}
                          size={10}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={leftadd}
                          onChange={(e) => setLeftadd(e.target.value)}
                          size={10}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={leftqnt}
                          onChange={(e) => setLeftqnt(e.target.value)}
                          size={10}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="manufacturer">
                <label>Manufacturer:</label>
                <input
                  type="text"
                  value={manu}
                  onChange={(e) => setManu(e.target.value)}
                />
              </div>

              <div className="remarks">
                <label>Remarks:</label>
                <textarea
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="PriceInfo">
          <div className="header">
            <h1>Price Breakup</h1>
            <button onClick={(e) => handlePricebreak(e)}>
              {pricebreaklogo}
            </button>
          </div>

          {pricebreak && (
            <div className="price-content">
              {framecode && (
                <div className="framecode">
                  <p>Frame</p>

                  <div className="row">
                    <div className="calc">
                      <label>GST%:</label>
                      <input
                        type="text"
                        disabled={gstdisable}
                        value={framegst}
                        onChange={(e) => setFramegst(e.target.value)}
                      />
                    </div>

                    <div className="calc">
                      <label>Amount:</label>
                      <input
                        type="text"
                        value={frameprice}
                        onChange={(e) => setFrameprice(e.target.value)}
                      />
                    </div>

                    <div className="calc">
                      <label>Discount:</label>
                      <input
                        type="text"
                        value={framediscount}
                        onChange={(e) => setFramediscount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {othercode && (
                <div className="othercode">
                  <p>Other</p>
                  <div className="row">
                    <div className="calc">
                      <label>GST%:</label>
                      <input
                        type="text"
                        disabled={gstdisable}
                        value={othergst}
                        onChange={(e) => setOthergst(e.target.value)}
                      />
                    </div>

                    <div className="calc">
                      <label>Amount:</label>
                      <input
                        type="text"
                        value={otherprice}
                        onChange={(e) => setOtherprice(e.target.value)}
                      />
                    </div>

                    <div className="calc">
                      <label>Discount:</label>
                      <input
                        type="text"
                        value={otherdiscount}
                        onChange={(e) => setOtherdiscount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {lenstype && (
                <div className="lenstype">
                  <p>Lens</p>
                  <div className="row">
                    <div className="calc">
                      <label>GST%:</label>
                      <input
                        type="text"
                        disabled={gstdisable}
                        value={lensgst}
                        onChange={(e) => setLensgst(e.target.value)}
                      />
                    </div>

                    <div className="calc">
                      <label>Amount:</label>
                      <input
                        type="text"
                        value={lensprice}
                        onChange={(e) => setLensprice(e.target.value)}
                      />
                    </div>
                    <div className="calc">
                      <label>Discount:</label>
                      <input
                        type="text"
                        value={lensdiscount}
                        onChange={(e) => setLensdiscount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {type && (
                <div className="type">
                  <p>Contact Lens</p>
                  <div className="row">
                    <div className="calc">
                      <label>GST%:</label>
                      <input
                        type="text"
                        disabled={gstdisable}
                        value={contactgst}
                        onChange={(e) => setContactgst(e.target.value)}
                      />
                    </div>

                    <div className="calc">
                      <label>Amount:</label>
                      <input
                        type="text"
                        value={contactprice}
                        onChange={(e) => setContactprice(e.target.value)}
                      />
                    </div>

                    <div className="calc">
                      <label>Discount:</label>
                      <input
                        type="text"
                        value={contactdiscount}
                        onChange={(e) => setContactdiscount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="buttons">
                <select
                  value={purchasetype}
                  onChange={(e) => handlePurchaseType(e)}
                >
                  <option value="Composite">Composite</option>
                  <option value="Excluding Tax">Excluding Tax</option>
                  <option value="Including Tax">Including Tax</option>
                </select>

                <button onClick={(e) => handleAmt(e)}>Calculate</button>
              </div>

              <div className="input">
                <div className="ta-bd a">
                  <label>Total Amount(Before Discount):</label>
                  <input
                    disabled={true}
                    type="text"
                    value={amountbeforediscount}
                    onChange={(e) => setAmountbeforediscount(e.target.value)}
                  />
                </div>

                <div className="discount a">
                  <label>Discount: </label>
                  <input
                    disabled={true}
                    type="text"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>

                <div className="ta-ad a">
                  <label>Total Amount(After Discount)</label>
                  <input
                    disabled={true}
                    type="text"
                    value={amountafterdiscount}
                    onChange={(e) => setAmountafterdiscount(e.target.value)}
                  />
                </div>

                <div className="cgst a">
                  <label>CGST:</label>
                  <input
                    disabled={true}
                    type="text"
                    value={cgst}
                    onChange={(e) => setCgst(e.target.value)}
                  />
                </div>

                <div className="sgst a">
                  <label>SGST:</label>
                  <input
                    disabled={true}
                    type="text"
                    value={sgst}
                    onChange={(e) => setSgst(e.target.value)}
                  />
                </div>

                <div className="tot-amt a">
                  <label>Total Amount:</label>
                  <input
                    disabled={true}
                    type="text"
                    value={totalamount}
                    onChange={(e) => setTotalamount(e.target.value)}
                  />
                </div>

                <div className="payment a">
                  <label>Advanced Payment:</label>
                  <input
                    type="text"
                    value={advancedpayment}
                    onChange={(e) => setAdvancedpayment(e.target.value)}
                  />
                </div>

                <div className="pay-method a">
                  <label>Payment Method:</label>
                  <select
                    value={paymentwith}
                    onChange={(e) => setPaymentwith(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="Card">Card</option>
                  </select>
                </div>
              </div>
              {calculated && (
                <div className="buttons">
                  <button onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Billentry;
