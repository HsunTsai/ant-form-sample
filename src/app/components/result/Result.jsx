import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
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
				<ReactJson
					theme="hopscotch"
					displayDataTypes={false}
					src={result}
				/>
			</div>
		</div>
	) : null;

Result.defaultProps = {
	result: null,
	error: null,
};

Result.propTypes = {
	result: PropTypes.objectOf(PropTypes.any),
	error: PropTypes.bool,
};

export default Result;
