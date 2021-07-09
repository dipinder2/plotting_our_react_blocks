import React from 'react';
import styles from './css/Main.module.css'
export default class Main extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.main}>
				{ this.props.children }
			</div>
		);
	}
}
