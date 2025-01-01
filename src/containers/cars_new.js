import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { reduxForm, Field } from 'redux-form'; 
import { createCar } from '../actions'; 

class CarsNew extends Component {
  onSubmit = (values) => {
    const { garage, navigate } = this.props;
    this.props.createCar(garage, values).then(() => { 
      navigate('/'); // Navigate after submit 
        // return car; 
    }); 
  }

  renderField(field) { 
    return ( 
      <div className="form-group"> 
        <label>{field.label}</label> 
        <input 
          className="form-control" 
          type={field.type} 
          {...field.input} 
        /> 
      </div> 
    ); 
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}> 
          <Field 
            label="Brand" 
            name="brand" 
            type="text" 
            component={this.renderField} 
          />
          <Field 
            label="Model" 
            name="model" 
            type="text" 
            component={this.renderField} 
          />
          <Field 
            label="Owner"
            name="owner" 
            type="text"
            component={this.renderField} 
          /> 
          <Field 
            label="Plate" 
            name="plate" 
            type="text" 
            component={this.renderField} 
          /> 
        <button className="btn btn-primary" type="submit" 
        disabled={this.props.pristine || this.props.submitting}> 
          Add car
        </button> 
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  garage: state.garage,
});

export default reduxForm({ form: 'newCarForm' })( 
  connect(mapStateToProps, { createCar })(CarsNew) 
);
