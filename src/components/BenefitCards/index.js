const BenefitCards = (props) => {
    const {title, subTitle, src, maxWidth} = props;
    return (
        <div className="benefit-section-card">
            <img src={src} className='benefit-image' alt='text-left' />
            <div className="benefit-title color-white left-align ">
                {title}
            </div>
            {subTitle && <div className="benefit-subtitle color-white left-align ">
                {subTitle}
            </div>
            }
        </div>
    )
}

export default BenefitCards;