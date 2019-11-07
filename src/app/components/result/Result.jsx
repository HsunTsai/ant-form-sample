import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './result.scss';

const Result = ({ result, error }) =>
	result ? (
		<div className="result">
			<div className="result__title">Form Result</div>
			<div
				className={classNames('result__content', {
					'result__content--error': error,
				})}
			>
				{result}
			</div>
		</div>
	) : null;

Result.defaultProps = {
	result: null,
	error: null,
};

Result.propTypes = {
	result: PropTypes.string,
	error: PropTypes.bool,
};

export default Result;
