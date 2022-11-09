import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Steps from './Steps';

export default function CardShow() {
    const location = useLocation();
    console.log(location)

    const value=location.state;
  return (
    <div>

        <div className="container">

            <div className="row text-center">
<div className="col-md-12">
<img className='w-25' src={value.img} alt="" />
<h1 className=' fw-bold text-primary mt-3' >{value.text2}</h1>
<p  className='text-muted fw-bold my-4'>Deposit BUSD Tokens and Earn MRACE</p>

</div>
            <div className="col-md-6">

<div className="card mb-3" style={{maxWidth: '940px'}}>

    <div className="row">
        <div className="col-md-6 text-center">
            <img className='w-50' src="/assets/10001.png" alt="" />

        </div>
        <div className="col-md-6 mt-5">
            <h1 className='fw-bold  text-primary'>MRACE</h1>
        </div>
    </div>
    <hr />
    <div className="row  my-4">
        <div className="col-md-6 text-center text-muted ">
            <h5>Earned</h5>
            <h5>0.00</h5>
        </div>
        <div className="col-md-6 text-center">
            <button className='btn'>Harvest</button>
        </div>
    </div>
    </div>

</div>
<div className="col-md-6">

<div className="card mb-3" style={{maxWidth: '940px'}}>

    <div className="row">
        <div className="col-md-6 text-center">
            <img className='w-50' src={value.img} alt="" />

        </div>
        <div className="col-md-6 mt-5">
            <h1>{value.text2}</h1>
        </div>
    </div>
    <hr />
    <div className="row  my-4">
        <div className="col-md-6 text-center ">
            <h5>{value.text2}</h5>
            <h5>0.00</h5>
        </div>
        <div className="col-md-6 text-center">
            <button className='btn'>Harvest</button>
        </div>
    </div>
    </div>

</div>
            </div>
            <div className='my-5'>
            < Steps/>
            </div>
        </div>
      
    </div>
   
  )
}
