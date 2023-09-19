import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const GetCashback = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 500
        });
      }, [])
    return (
        <div className="get-cashback-container">
            <div className='fw500' >
                <p className='get-cashback-text fw500' data-aos="fade-up"><span className='bold-text-color'> Earn 1% assured cashback</span> on your spends. Get 5X</p>
                <p className='get-cashback-text fw500' data-aos="fade-up"><span className='bold-text-color'>more value than cashback</span> at the Uni Store. Enjoy</p>
                <p className='get-cashback-text fw500' data-aos="fade-up">round the clock <span className='bold-text-color'>Whatsapp support.</span>And it's</p>
                <p className='get-cashback-text fw500' data-aos="fade-up"><span className='bold-text-color'> lifetime free</span>; no joining fee, no annual charges.</p>
            </div>

            <div className='down-arrow-container flex' data-aos="fade-up">
                <div className="flex down-arrow-img-container">
                    <img alt="down_arrow" src="https://www.uni.cards/images/down_arrow.svg" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default GetCashback;