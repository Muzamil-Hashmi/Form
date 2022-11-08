import React from "react";

export default function Cards() {
  const data = [
    {
      img: "./assets/10001.png",

      head: "APY : 600%",
      text1: "Deposit",
      text2: "GMT",
      text3: "Earn",
      text4: "MRACE",
    },
    {
      img: "./assets/10002.png",

      head: "APY : 3500%",
      text1: "Deposit",
      text2: "BUSD",
      text3: "Earn",
      text4: "MRACE",
    },
    {
      img: "./assets/10003.png",

      head: "APY : 4000%",
      text1: "Deposit",
      text2: "USDT",
      text3: "Earn",
      text4: "MRACE",
    },
    {
      img: "./assets/10004.png",

      head: "APY : 4000%",
      text1: "Deposit",
      text2: "USDC",
      text3: "Earn",
      text4: "MRACE",
    },
    {
      img: "./assets/10005.png",

      head: "APY : 3400%",
      text1: "Deposit",
      text2: "WBNB",
      text3: "Earn",
      text4: "MRACE",
    },
    {
      img: "./assets/10006.png",

      head: "APY : 4500%",
      text1: "Deposit",
      text2: "CAKE",
      text3: "Earn",
      text4: "MRACE",
    },
    {
      img: "./assets/10007.png",

      head: "APY : 4500%",
      text1: "Deposit",
      text2: "ETH",
      text3: "Earn",
      text4: "MRACE",
    },
    {
      img: "./assets/10008.png",

      head: "APY : 4500%",
      text1: "Deposit",
      text2: "1INCH",
      text3: "Earn",
      text4: "MRACE",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            {data.map((v, i) => {
              return (
                <>
                  <div className="col-md-6 me-3 mb-4" key={i}>
                    <div className={`card text-dark w-100  border-primary   `}>
                      <div className="card-body ">
                        <img
                          src={v.img}
                          className="w-100 d-block m-auto"
                          alt=""
                        />
                        <h3 className="fw-bold text-primary text-center">
                          {v.head}
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <h5 className="fw-bold text-muted">{v.text1}</h5>
                          </div>
                          <div className="col-md-6">
                            <h5>{v.text2}</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h5 className="fw-bold text-muted">{v.text3}</h5>
                          </div>
                          <div className="col-md-6">
                            <h5>{v.text4}</h5>
                          </div>
                        </div>
                        <hr />
                        <button className="btn border-info text-info btn-lg px-5 ms-5">
                          Select
                        </button>
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
