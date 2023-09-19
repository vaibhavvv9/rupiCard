import React from 'react';

import sample from './nxt_wave_bg.mp4'

import './fullScreenVideo.css'; 

const rightBtnStyle = {
  display: 'flex',
  padding: '0 18px',
  fontWeight: "500",
  width: '144px',
  height: '42px',
  color: 'white',
  alignItems: 'center',
  justifySelf: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '10px'
};

const btnStyle = {
  backgroundColor: 'rgba(253,239,120,1)'
}

const FullScreenVideo = () => {
  return (
    <div >
<div id="videoWrapper">
<video autoPlay muted loop classNameName="background-video">
        <source src={sample} type="video/mp4" />
      </video>

  <div className="caption">
    <div style={{ 
      height: '40px', 
      margin: "0 52px",
    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
     }}>
        <div classNameName='leftLogo' style={{ width : "115px", height: '60px'}}>
        <svg className="Logo_logo_white__zowGB" viewBox="0 0 85 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z" fill="black"></path></svg>
        </div>
    <div classNameName='rightBtn11' style={rightBtnStyle} >
       Uni PayCheck
    </div>
     </div>
<div className="flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent content">
<img src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png" alt="card_asset" className="" style={{ width: "420px", height: "420px"}}/>
<div className="rewards"><h1 className=" headerText ">
<span style={{ fontSize: "3.4rem", fontWeight: "400", fontFamily: "Matter,sans-serif", lineHeight: "54px"}}>
  <strong>NX Wave.</strong> 
The next-gen credit card for those who love rewards.
</span>
</h1>
<div className="mt-4 md:mt-0">
  <p className="font-medium text-sm md:text-base md:mb-9">1% Cashback
  <svg className="mx-[8px] mb-[2px] inline leading-5" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z" fill="#000"></path></svg>5x Rewards<svg className="mx-[8px] mb-[2px] inline leading-5" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z" fill="#000" ></path></svg>Zero Forex Markup</p></div>
      <div className="hidden md:block">
        <div className="flex justify-between items-center block max-w-[94vw]">
          <div className="flex flex-col">
            <form>
              <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                <div className="flex items-center">
                  <input className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44" placeholder="Enter Phone Number" value=""/>
                    <span className="w-6 flex items-center justify-end h-full"></span>
                    </div>
                    <button type="submit" className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-uni-yellow rounded-xl z-10 py-2 px-4 disabled:cursor-not-allowed"
                     style={btnStyle}>
                      <span>Apply Now</span>
                      </button>
                      </div>
                      </form>
                      <div className="consent flex items-center py-4 px-2 max-w-xs">
                        <input type="checkbox" checked="" id="consent-msg"/>
                        <label for="consent-msg" className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer">You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
                        </div>
                        </div>
                        </div>
                        {/* <div className="flex hidden max-w-xs flex-col justify-start"> */}
                          {/* <div className="w-full max-w-[300px]"> */}
                            {/* <a href="https://uni-growth.onelink.me/v6cm/" target="_blank" rel="noopener noreferrer" className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
                            <div className="w-full flex justify-center items-center">
                              <span>Download</span>
                              </div>
                              </a> */}
                              {/* </div> */}
                              {/* <div className="my-2"> */}
                                {/* <p className="text-white md:text-black text-[10px] leading-3">
                                  Thank you for your interest in the Uni Card.
                                  <br/>
                                   Download the Uni Cards app now and get your Uni Card in minutes.
                                   </p> */}
                                {/* </div> */}
                                {/* </div> */}
                                </div>
                                </div>
                                </div>
  </div>

</div>
  

  </div>
  );
};

export default FullScreenVideo;