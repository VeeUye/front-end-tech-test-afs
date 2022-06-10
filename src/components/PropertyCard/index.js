import React from 'react'
import PropTypes from 'prop-types'

import BedIcon from '../icons/BedIcon'
import FavouriteIcon from '../icons/FavouriteIcon'
import BathIcon from '../icons/BathIcon'
import AvailableFromIcon from '../icons/AvailableFromIcon'
import DistanceFromIcon from '../icons/DistanceFromIcon'
import TenancyAgreementIcon from '../icons/TenancyAgreementIcon'
import '../PropertyCard/styles.scss'

const PropertyCard = ({ properties }) => {
  const {
    accountType,
    address,
    availableFrom,
    baths,
    beds,
    distanceFromUniversity,
    propertyType,
    tenancyAgreement,
    terms,
    thumbnails,
  } = properties[0]

  return (
    // <div className="property-card">
    //   <img className="photo" src={thumbnails[0].url} alt="property"></img>
    //   <div className="property-info">
    //     <div className="propert-info-innner">
    //       <div className="frame-106">
    //         <div className="property-type">{propertyType}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="property-card">
      <img className="photo" src={thumbnails[0].url} alt="property"></img>
      <div className="property-info">
        <div className="property-info-inner">
          <div className="frame-106">
            <div className="property-type">{propertyType}</div>
            <div className="seperator"> • </div>
            <div className="account-type">{accountType}</div>
          </div>
          <div className="address-header">{address.address2}</div>
          <div className="beds-baths">
            <div className="beds">
              <div className="bed-4-1">
                <div className="beds-icon-container">
                  <div className="beds-icon">
                    <BedIcon />
                  </div>
                </div>
              </div>
              <div className="beds-text">{beds} bed</div>
            </div>
            <div className="baths">
              <div className="shower-icon-container">
                <div className="shower-icon">
                  <BathIcon />
                </div>
              </div>

              <div className="baths-text">{baths} bath</div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="tenancy-agreement">
            <div className="profile">
              <TenancyAgreementIcon />
            </div>
            <div className="tenancy-agreement-text">
              Suitable for {tenancyAgreement}
            </div>
          </div>
          <div className="address">
            <div className="location">
              <DistanceFromIcon />
            </div>
            <div className="location-text">
              {distanceFromUniversity.time}&nbsp;
              {distanceFromUniversity.modeOfTransport} to University
            </div>
          </div>
          <div className="available-from">
            <div className="calender">
              <AvailableFromIcon />
            </div>
            <div className="available-from-text">
              Available from {availableFrom}
            </div>
          </div>
        </div>
      </div>

      <div className="heart">
        <FavouriteIcon />
      </div>
      <div className="price">
        <div className="price-inner">
          <div className="price-text">FROM</div>
          <div className="price-value">
            <div className="price-ppw">£{terms.rentPpw.value}</div>&nbsp;pp/pw
          </div>
        </div>
        <div className="bills">
          <div className="bills-inner">
            {terms.billsIncluded}&nbsp;bills included
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard

PropertyCard.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      accountType: PropTypes.string,
      address: PropTypes.shape({
        address2: PropTypes.string,
      }),
      availableFrom: PropTypes.string,
      baths: PropTypes.number,
      beds: PropTypes.number,
      distanceFromUniversity: PropTypes.shape({
        time: PropTypes.string,
        modeOfTransport: PropTypes.string,
      }),
      propertyType: PropTypes.string,
      tenancyAgreement: PropTypes.string,
      terms: PropTypes.shape({
        bills: PropTypes.string,
        rentPpw: PropTypes.shape({
          value: PropTypes.number,
          currency: PropTypes.string,
        }),
      }),
      thumbnails: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
        })
      ),
    })
  ),
}
