import React from 'react';
import { browserHistory, Router, Route, Link } from 'react-router'
import CategoriesView from './CategoriesView.js';
import utils from './utils';
import styles from '../styles/styles.css'


class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      price: 2,
      radius: 2,
      chooseFood: true
    }
  }

  prefsChange (e) {
    var value = e.target.value;
    console.log(value);
    var slider = e.currentTarget.name;
    console.log(slider);
  }

  handleSubmit (e) {
    e.preventDefault();

    // Get the values from the form
    var prefs = {
      price: this.refs.price.value,
      stars: this.refs.stars.value,
      distance: this.refs.distance.value
    };

    this.props.updatePreferences(prefs);
  }

  render (){
    var categories = ['Mexican', 'Italian', 'Bars', 'Pizza'];

    return (
      <form name='preferences' className='prefernces' onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <legend>Dashboard</legend>
          <label className='price' htmlFor='price'>Price:</label>
          <input className='price' name='price' type='range' min='1' max='4' onChange={this.prefsChange.bind(this)}/>
          <label className='radius' htmlFor='radius'>Maximum Distance:</label>
          <input className='radius' name='radius' type='range' min='1' max='4' onChange={this.prefsChange.bind(this)}/>
          
          <div className={styles["onoffswitch"]}>
            <input type="checkbox" name="onoffswitch" className={styles["onoffswitch-checkbox"]} id="myonoffswitch" onChange={this.prefsChange.bind(this)} />
            <label className={styles["onoffswitch-label"]} htmlFor="myonoffswitch">
              <span className={styles["onoffswitch-inner"]}></span>
              <span className={styles["onoffswitch-switch"]}></span>
            </label>
          </div>


          <button type='submit'>Submit</button>
        </fieldset>
      </form>
      )
  }
}

export default Dashboard;