
import React from 'react';

import FullScreenVideo from './components/FullScreenVideo';
import GetCashback from './components/GetCashback';
import RightTextLeftImg from './components/RightTextLeftImg';
import GetLifeTimeAccessText from './components/GetLifeTimeAccessText';
import FeatureSection from './components/FeatureSection';

import appScreen from './utils/assets/app_screen.webp';
import appScreen2 from './utils/assets/app_screen_2.webp';
import whatsappBubble2 from './utils/assets/whatsapp_bubble.webp';
import rupees from './utils/assets/rupee_bubble.jpg'
import antivirus from './utils/assets/antivirus_bubble.jpg'

import './App.css';
import BenefitCards from './components/BenefitCards';

const benefitCardContent = [
  {
    src: whatsappBubble2,
    title: 'Help, just a WhatsApp away. Anytime, Anyday.',
    subTitle:'During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.'
  },
  {
    src: rupees,
    title: 'No hidden charges, no last minute surprises.',
    subTitle:'100% money back guarantee if a charge is applied without your knowledge.'
  },
  {
    src: antivirus,
    title: 'Super secure. Because we care about your money.',
    subTitle:'During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.'
  }
]

function App() {
  return (
    <div className="App" style={{width: '100%', height: '100%'}}>
      <FullScreenVideo />
      <GetCashback />
      <RightTextLeftImg
          title={<><p ><span className='color-black'>1% assured cashback on your spends.</span> The more you spend, the more you earn.</p></>}
          subTitle='Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.'
          src='https://www.uni.cards/images/one_percent_cashback.png'
          maxWidth='80rem'
       />

      <RightTextLeftImg
          title={<><p ><span className='color-black'>Zero Forex Markup.</span><br /><span className='fw500'>  Go international, without any fees.</span></p></>}
          src='https://www.uni.cards/images/five_x_rewards.png'
          rightText={true}
          maxWidth='70rem'
       />

      <RightTextLeftImg
          title={<><p ><span className='color-black'>Zero Forex Markup.</span><br /><span className='fw500'>  Go international, without any fees.</span></p></>}
          src='https://www.uni.cards/images/forex_globe.png'
          maxWidth='70rem'
       />

       <GetLifeTimeAccessText />

      <div className='feature-section-container'>
          <div className='section-container flex pt-100'>
            <FeatureSection
                title={<><span>We’ve all heard of instant groceries, now say hello to</span> <span className='features'>instant credit.</span></>}
                subTitle='0% hassle, 100% paperless. Get your Uni Card instantly.'
                src={appScreen}
            />
          </div>

          <div className='section-container flex'>
            <FeatureSection
                title={<><span>With Uni,<br /><span className='features'> you’re always in control.</span> </span> instant credit.</>}
                subTitle='Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.'
                src={appScreen2}
              />
          </div>


          <div className='benefit-section-container flex'>
          {benefitCardContent.map((item) => {
            return (
              <>
                <BenefitCards
                  src={item.src}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              </>
            )
          })}
          </div>
          
      </div>
    </div>
  );
}

export default App;
