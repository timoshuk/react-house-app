import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

const ListingItem = ({
  listing: {
    type,
    imgUrls,
    name,
    location,
    offer,
    discountedPrice,
    regularPrice,
    bedrooms,
    bathrooms,
  },
  id,
  onDelete,
}) => {
  return (
    <li className="categoryListing">
      <Link to={`/category/${type}/${id}`} className="categoryListingLink">
        <img src={imgUrls[0]} alt={name} className="categoryListingImg" />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{location}</p>
          <p className="categoryListingName">{name}</p>
          <p className="categoryListingPrice">
            ${" "}
            {offer
              ? discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {type === "rent" && " / Month"}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="Bed" />
            <p className="categoryListingInfoText">
              {bedrooms > 1 ? `${bedrooms} Bedrooms` : "1 Bedroom"}
            </p>
            <img src={bathtubIcon} alt="bath" />
            <p className="categoryListingInfoText">
              {bathrooms > 1 ? `${bathrooms} Bathrooms` : "1 Bathroom"}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231,76,60)"
          onClick={() => {
            onDelete(id, name);
          }}
        />
      )}
    </li>
  );
};

export default ListingItem;
