import React from 'react';
import styles from './css/SubContnent.module.css'
export default class SubContent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.SubContent}></div>
		);
	}
}
