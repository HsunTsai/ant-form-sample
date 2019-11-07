import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

import './common.scss';

const Agree = ({ agree, onChange }) => {
	const [selectValue, setSelectValue] = useState('no');
	return (
		<div className="common">
			<div className="common__data">
				I am content .... bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla ...
			</div>
			<Radio.Group
				defaultProps={agree}
				value={selectValue}
				onChange={e => {
					const { value } = e.target;
					console.log('value', value);
					setSelectValue(value);
					onChange(value === 'yes');
				}}
			>
				<Radio value="yes">Yes</Radio>
				<Radio value="no">No</Radio>
			</Radio.Group>
		</div>
	);
};

Agree.defaultProps = {
	agree: false,
};

Agree.propTypes = {
	agree: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
};

export default Agree;
