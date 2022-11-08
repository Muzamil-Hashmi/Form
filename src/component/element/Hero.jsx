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
    {
      img: "./assets/10003.png",
      h1: "/assets/10001.png",

      text: "Earn",
      text1: "GMT",
      text3: "DEPOSIT",
      text4: "MRACE",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row  my-5">
         <div>
         <h1 className="text-center">
            FORM
          </h1>
          <h5 className="text-center">  Stake your tokens to earn more $MRACE.</h5>
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
                              className="w-50 d-block m-auto"
                              alt=""
                            />
                          </div>

                          <div className="col-md-6">
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
        </div>
      </div>
    </div>
  );
}
