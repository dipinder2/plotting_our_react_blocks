import React from 'react';
import styles from './css/Header.module.css';

export default class Header extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.header}></div>
		);
	}
}
