// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';

export function createCar(garageName, body) {
  const request = fetch(`https://garage.api.lewagon.com/${garageName}/cars`, {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify(body) 
  }).then(response => response.json())

  return { 
    type: CAR_CREATED, 
    payload: request 
  }; 
}

export function fetchCar(id) {
  const request = fetch(`https://garage.api.lewagon.com/${garageName}/cars/${id}`)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: request
  };
}

export function fetchCars(garageName) {
  const request = fetch(`https://garage.api.lewagon.com/${garageName}/cars`)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching cars: ', error);
    });

  return {
    type: FETCH_CARS,
    payload: request
  };
}
