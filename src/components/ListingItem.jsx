import { Link } from 'react-router-dom'
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathubIcon from '../assets/svg/bathtubIcon.svg'

function ListingItem({ item, id, onDelete, onEdit }) {
  return (
    <li className="categoryListing">
      <Link to={`/category/${item.type}/${id}`} className="categoryListingLink">
        <img
          src={item.imageUrls[0]}
          alt={item.name}
          className="categoryListingImg"
        />

        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{item.location}</p>
          <p className="categoryListingName">{item.name}</p>
          <p className="categoryListingPrice">
            $
            {item.offer
              ? item.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : item.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {item.type === 'rent' && ' / Month'}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {item.bedrooms > 1 ? `${item.bedrooms} Bedrooms` : `1 Bedroom`}
            </p>
            <img src={bathubIcon} alt="bath" />
            <p className="categoryListingInfoText">
              {item.bathrooms > 1
                ? `${item.bathrooms} Bathrooms`
                : `1 Bathroom`}
            </p>
          </div>
        </div>
      </Link>

      {onEdit && <EditIcon className="editIcon" onClick={() => onEdit(id)} />}
      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231, 76, 60)"
          onClick={() => onDelete(id)}
        />
      )}
    </li>
  )
}

export default ListingItem
