import React from "react";

export default function Hero() {
  const data = [
    {
      "id":1,
      img: "./assets/10001.png",
      head: "YOUR MRACE BALANCE ",
      p: "Pending Harvest",
      text: "Daily Output of MRACE",
      text1: "0.00 MRACE",
      text2: "MRACE",

      btn: "Buy",
    },
    
  ];
  const value=[
    
      {
        img: "./assets/10045.png",

        img1: "/assets/10001.png",
  
        text: "Earn",
        text1: "GMT",
        text3: "DEPOSIT",
        text4: "MRACE",
        btn  :"Select"
      },
    
  ]
  return (
    <div>
      <div className="container">
        <div className="row  my-5">
         <div>
         <h1 className="text-center fw-bold text-primary display-2">
            FARM
          </h1>
          <h5 className="text-center text-muted">  Stake your tokens to earn more $MRACE.</h5>
         </div>
          <div className="col-md-6 mt-5 d-flex">
            {data.map((v, i) => {
              return (
                <>
                  <div className="col-md-12   me-5 " key={i}>
                    <div className={`card text-dark `}  >
                      <div className="card-body border " >
                        <div className="row">
                          <div className="col-md-6">
                            <img
                              src={v.img}
                              className="w-75 d-block m-auto"
                              alt=""
                            />
                          </div>

                          <div className="col-md-6 mt-5">
                          <h4 className="fw-bold">{v.head} <br /><span className="fw-bold text-primary fs-3">0.00</span></h4>
                          </div>
                        </div>
                        <hr />
<div className="row">
  <div className="col-md-6">

    <h5 className="fw-bold text-muted">{v.p}</h5>
  </div>
  <div className="col-md-6">
    <p className="fw-bold text-muted fs-5"><span className="text-black">0.00 </span>{v.text2}</p>
  </div>
</div>
<div className="row">
  <div className="col-md-6">

    <p className="fw-bold text-muted">{v.text}</p>
  </div>
  <div className="col-md-6">
    <p className="fw-bold text-muted fs-5"><span className="text-black ">0.00 </span>{v.text2}</p>
  </div>
</div>
                        
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-md-6 mt-5 d-flex">
            {value.map((v, j) => {
              return (
                <>
                  <div className="col-md-12   me-5 " key={j}>
                    <div className={`card text-dark `}  >
                      <div className="card-body border " >
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src={v.img}
                              className="w-100 "
                              alt=""
                            />
                          </div>
<div className="col-md-4 text-center mt-3">
  <h1>APY <br />500%</h1>
</div>
                          <div className="col-md-4">
                            <img className="w-100" src={v.img1} alt="" />
                          </div>
                        </div>
                        <hr className="px-5" />
<div className="row">
  <div className="col-md-6">

    <h5 className="fw-bold text-muted">{v.p}</h5>
  </div>
  
</div>
<div className="row px-4">
  <div className="col-md-3">
    <h5 className="text-muted">{v.text}</h5>

  </div>
  <div className="col-md-3">
    <h5>{v.text1}</h5>

  </div>
  <div className="col-md-3">
    <h5 className="text-muted">{v.text3}</h5>

  </div>
  <div className="col-md-3">
    <h5>{v.text4}</h5>

  </div>
  
</div>
<div className="text-center mt-1">
<button className="btn text-info border-info fw-bold fs-3   mt-3 px-5">{v.btn}</button>
</div>                        
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
