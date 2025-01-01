import React, { Component, useEffect } from 'react'; 
import { Link, useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCar, fetchCar } from '../actions';

// class CarsShow extends Component { 
//   componentDidMount() { 
//     if (!this.props.car) { 
//       this.props.fetchCar(this.props.match.params.id); 
//     } 
//   } 

//   render() { 
//    if (!this.props.car) { 
//       return <p>Loading...</p>; 
//     } 
//     return ( 
//       <div> 
//         <div className="car-item"> 
//           <h3>{this.props.car.brand}</h3> 
//           <p>{this.props.car.model}</p> 
//         </div> 
//         <Link to="/"> 
//           Back 
//         </Link> 
//       </div> 
//     ); 
//   } 
// }

const CarsShow = ({ car, fetchCar }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    if (!car) {
      fetchCar(id);
    }
  }, [id, car, fetchCar]);

  const handleDelete = () => {
    deleteCar(id)
    navigate('/'); // Navigate back to index after deletion
    };

  if (!car) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div className="car-item">
        <h3>{car.brand}</h3>
        <p>{car.model}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Car
        </button>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

function mapStateToProps(state) { 
  const { id } = useParams(); // Use the ID passed from useParams
  const car = state.cars.find((p) => p.id === parseInt(id, 10));
  return { car };
}

export default connect(mapStateToProps, { fetchCar, deleteCar })(CarsShow);
