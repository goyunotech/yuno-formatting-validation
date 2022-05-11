declare type PropertyAddress = {
  addressLine1: string,
  addressLine2: string | null,
  addressLine3: string | null,
  city: string | null
  postcode: string,
  buildingName: string | null,
  buildingNumber: string | null,
  flatName: string | null,
}

exports.formatAddress = function(address: PropertyAddress) {
  return Object.values(address).filter(x => x).join(', ');
}