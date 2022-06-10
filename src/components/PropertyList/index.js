import React from 'react'
import PropertyCard from '../PropertyCard'
import '../PropertyList/styles.scss'

const PropertyList = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          propertyType={property.propertyType}
          beds={property.beds}
          baths={property.baths}
          tenancyAgreement={property.tenancyAgreement}
          accountType={property.accountType}
          address={property.address}
          thumbnails={property.thumbnails}
          terms={property.terms}
          availableFrom={property.availableFrom}
          distanceFromUniversity={property.distanceFromUniversity}
        />
      ))}
    </div>
  )
}

export default PropertyList
