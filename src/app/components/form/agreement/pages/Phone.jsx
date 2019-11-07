import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import './common.scss';

const Agree = ({ onChange }) => (
	<div className="common">
		<div className="common__data">
			I am content .... bla bla bla bla bla bla bla bla bla bla bla bla
			bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
			bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
			bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
			bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
			bla bla bla bla ...
		</div>
		<Input
			placeholder="Phone"
			onChange={e => {
				const { value } = e.target;
				onChange(value);
			}}
		/>
	</div>
);

Agree.defaultProps = {};

Agree.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default Agree;
