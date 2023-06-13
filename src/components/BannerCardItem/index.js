// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {sourceItem} = props
  const {headerText, description, className} = sourceItem

  return (
    <li className={className}>
      <div>
        <h1 className="card-heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
