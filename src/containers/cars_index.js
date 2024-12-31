import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../actions";
import { Link } from "react-router-dom";

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }
  
  render() {
    const { cars, garage } = this.props;

    return (
      <div>
        <h1>{garage} Garage</h1>
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <Link to={`/cars/${car.id}`} >
                <strong>{car.brand} {car.model}</strong> - {car.owner} (Plate: {car.plate})
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/cars/new">
          <button className="btn btn-primary">Add New Car</button>
        </Link>
      </div>
    );
  }
};

 const mapStateToProps = (state) => ({
  cars: state.cars,
  garage: state.garage
});

export default connect(mapStateToProps, { fetchCars })(CarsIndex);
