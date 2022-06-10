import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PropertyCard from '../components/PropertyCard'

describe('PropertyCard', () => {
  const validProps = {
    accountType: 'Landlord',
    address: {
      address2: '12 Darley Road',
    },
    availableFrom: '12 December',
    baths: 1,
    beds: 2,
    distanceFromUniversity: {
      time: '10 mins',
      modeOfTransport: 'walk',
    },
    propertyType: 'flat',
    tenancyAgreement: 'groups',
    terms: {
      bills: 'some',
      rentPpw: {
        value: 100,
        currency: 'GBP',
      },
    },
    thumbnails: {
      url: 'pic/is/here',
    },
  }

  it('renders correctly', () => {
    const { asFragment } = render(
      <PropertyCard
        accountType={validProps.accountType}
        address={validProps.address}
        availableFrom={validProps.availableFrom}
        baths={validProps.baths}
        beds={validProps.beds}
        distanceFromUniversity={validProps.distanceFromUniversity}
        propertyType={validProps.propertyType}
        tenancyAgreement={validProps.tenancyAgreement}
        terms={validProps.terms}
        thumbnails={validProps.thumbnails.url}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correct values for props', () => {
    const { getByText } = render(
      <PropertyCard
        accountType={validProps.accountType}
        address={validProps.address}
        availableFrom={validProps.availableFrom}
        baths={validProps.baths}
        beds={validProps.beds}
        distanceFromUniversity={validProps.distanceFromUniversity}
        propertyType={validProps.propertyType}
        tenancyAgreement={validProps.tenancyAgreement}
        terms={validProps.terms}
        thumbnails={validProps.thumbnails.url}
      />
    )

    expect(screen.getByText(/Landlord/i)).toBeInTheDocument()

    expect(screen.getByText(/Darley Road/i)).toBeInTheDocument()

    expect(screen.getByText(/12 December/i)).toBeInTheDocument()

    expect(screen.getByText(/walk/i)).toBeInTheDocument()

    expect(screen.getByText(/flat/i)).toBeInTheDocument()

    expect(screen.getByText(/suitable for groups/i)).toBeInTheDocument()

    expect(screen.getByText(/bills included/i)).toBeInTheDocument()
  })
})
