import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from 'antd';

import './basicInfo.scss';

class BaseInfo extends Component {
	constructor(props) {
		super(props);
		// eslint-disable-next-line react/prop-types
		const { value } = props;
		this.state = {
			age: value.age || 0,
			height: value.height || 150,
		};
	}

	componentDidMount() {
		this.handleChange('init');
	}

	handleChange = (type, value) => {
		const { onChange } = this.props;
		const { age, height } = this.state;
		switch (type) {
			case 'init':
				if (Number.isInteger(age) && Number.isInteger(height)) {
					onChange({ age, height });
				} else {
					onChange(null);
				}
				break;
			case 'age':
				this.setState({ age: value });
				if (Number.isInteger(value) && Number.isInteger(height)) {
					onChange({ age: value, height });
				} else {
					onChange(null);
				}
				break;
			case 'height':
				this.setState({ height: value });
				if (Number.isInteger(value) && Number.isInteger(age)) {
					onChange({ age, height: value });
				} else {
					onChange(null);
				}
				break;
			default:
		}
	};

	render() {
		const { age, height } = this.state;
		return (
			<div className="basicInfo">
				<InputNumber
					className="basicInfo__item"
					defaultValue={age}
					onChange={value => this.handleChange('age', value)}
				/>
				<InputNumber
					className="basicInfo__item"
					defaultValue={height}
					onChange={value => this.handleChange('height', value)}
				/>
			</div>
		);
	}
}

BaseInfo.defaultProps = {
	onChange: null,
};

BaseInfo.propTypes = {
	onChange: PropTypes.func,
};

export default BaseInfo;
