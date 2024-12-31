import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions';

class CarsShow extends Component { 
  componentDidMount() { 
    if (!this.props.car) { 
      this.props.fetchCar(this.props.match.params.id); 
    } 
  } 

  render() { 
   if (!this.props.car) { 
      return <p>Loading...</p>; 
    } 
    return ( 
      <div> 
        <div className="car-item"> 
          <h3>{this.props.car.brand}</h3> 
          <p>{this.props.car.model}</p> 
        </div> 
        <Link to="/"> 
          Back 
        </Link> 
      </div> 
    ); 
  } 
}

function mapStateToProps(state, ownProps) { 
  // const { id } = useParams();
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(p => p.id === idFromUrl); 
  return { car }; 
}

const WrappedCarsShow = (props) => {
  const { id } = useParams(); // Get ID from URL
  return <CarsShow {...props} id={id} />;
};
  
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedCarsShow);
