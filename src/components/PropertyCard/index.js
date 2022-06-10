import React from 'react'
import PropTypes from 'prop-types'
import '../PropertyCard/styles.scss'

const PropertyCard = (properties) => {
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
  } = properties
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
