// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard

  return (
    <li className={`${className} banner-card-container`}>
      <div>
        <h1 className="banner-title">{headerText}</h1>
        <p className="banner-description">{description}</p>
        <button className="show-more-button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
