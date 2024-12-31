// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';

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
