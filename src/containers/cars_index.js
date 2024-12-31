import React from "react";
import { connect } from "react-redux";

const CarsIndex = ({ cars }) => {
  return (
    <div>
      <h1>My garage</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <strong>{car.brand} {car.model}</strong> - {car.owner} (Plate: {car.plate})
          </li>
        ))}
      </ul>
    </div>
  );
};

 const mapStateToProps = (state) => ({
  cars: state.cars,
});

export default connect(mapStateToProps)(CarsIndex);
