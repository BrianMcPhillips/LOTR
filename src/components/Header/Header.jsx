import React, { Component } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h2>Lord of the Rings</h2>
        <Link to='/'>Home</Link>
        <Link to='/detail'>Detail</Link>
      </div>
    )
  }
}
