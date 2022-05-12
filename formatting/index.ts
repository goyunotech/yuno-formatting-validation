declare type PropertyAddress = {
  addressLine1: string;
  addressLine2: string | null;
  addressLine3: string | null;
  city: string | null;
  postcode: string;
  buildingName: string | null;
  buildingNumber: string | null;
  flatName: string | null;
};

export function formatAddress(address: PropertyAddress) {
  return Object.values(address)
    .filter(x => x)
    .join(', ');
}

export function formatShortAddress(address: PropertyAddress) {
  return [
    address.buildingNumber,
    address.buildingName,
    address.flatName,
    address.addressLine1,
    address.addressLine2,
    address.addressLine3,
    address.postcode,
  ]
    .filter(x => x)
    .join(', ');
}

const addZero = value => {
  if (value < 10) {
    value = `0${value}`;
  }
  return value;
};

export function formatDateDMYHMS() {
  const today = new Date();
  const day = addZero(today.getDate());
  const month = addZero(today.getMonth() + 1);
  const year = today.getFullYear();
  const hr = addZero(today.getHours());
  const min = addZero(today.getMinutes());
  const sec = addZero(today.getSeconds());
  return `${day}/${month}/${year} ${hr}:${min}:${sec}`;
}
