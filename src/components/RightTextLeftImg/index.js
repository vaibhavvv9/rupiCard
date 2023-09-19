import './rightTextLeftImg.css'

const RightTextLeftImg = (props) => {
    const {title, subTitle, src, rightText, maxWidth} = props;
    return (
        <div className="right-text-left-img-container" style={{maxWidth: maxWidth}}>
            <div className='align-wrapper'>
            {!rightText && <div className=''>
                <p className='title-text-container'>{title}</p>
                {
                    subTitle && <p className='subtitle-text-container'>
                        {subTitle}
                    </p>
                }
            </div>}
            <div>
                <img src={src} className='right-text-left-image' alt='text-left' />
            </div>

            {rightText && <div className=''>
                <p className='title-text-container'>{title}</p>
                {
                    subTitle && <p className='subtitle-text-container'>
                        {subTitle}
                    </p>
                }
            </div>}
            </div>
        </div>
    )
}

export default RightTextLeftImg;