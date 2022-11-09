import React from 'react'
import {TiSocialFacebookCircular,TiSocialGithubCircular,TiSocialLinkedinCircular,TiSocialTwitterCircular,TiSocialTumblerCircular,TiSocialPinterestCircular}from 'react-icons/ti'

export default function Steps() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-6">

                <h1 className='display-5 fw-bold text-info'>YOUR STEPS COUNT <br /> WITH Marathon!</h1>
                <img src="/assets/10009.svg" alt="" />
                <img className='ms-4 ' src="/assets/10010.svg" alt="" />

            </div>
            <div className="col-md-6">
                <h2 className='fw-bold display-6 ms-3 text-center'>Join Our Comunity</h2>
             <div className='text-center text-muted mt-4'>
                <TiSocialFacebookCircular size={30}/>
                <TiSocialGithubCircular size={30}/>
                <TiSocialLinkedinCircular size={30}/>
                <TiSocialTwitterCircular size={30}/>
                <TiSocialTumblerCircular size={30}/>
                <TiSocialPinterestCircular size={30}/>
             </div>

            </div>
        </div>
      </div>
    </div>
  )
}
