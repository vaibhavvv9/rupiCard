const FeatureSection = (props) => {
    const {title, subTitle, src, maxWidth} = props;
    return (
        <div>
            <div className="right-text-left-img-container" style={{maxWidth: maxWidth}}>
                <div className='align-wrapper'>
                <div className='feature-section-text-container'>
                    <p className='feature-section-title'>{title}</p>
                    <p className='feature-section-sub-title'>{subTitle}</p>
                </div>
                <div>
                    <img src={src} className='right-text-left-image' alt='text-left' />
                </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection;