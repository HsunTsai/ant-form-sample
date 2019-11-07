import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Checkbox, Input } from 'antd';

import './common.scss';

const Content = ({ form, form: { getFieldDecorator }, onChange }) => {
	// const handleChange = (type, value) => {
	// 	switch (type) {
	// 		case 'checkbox':
	// 			setCheckbox(value);
	// 			if (value && signature && signature.length > 0) {
	// 				onChange({ checkbox: value, signature });
	// 			} else {
	// 				onChange(null);
	// 			}
	// 			break;
	// 		case 'signature':
	// 			setSignature(value);
	// 			if (checkbox && value && value.length > 0) {
	// 				onChange({ checkbox, signature: value });
	// 			} else {
	// 				onChange(null);
	// 			}
	// 			break;
	// 		default:
	// 	}
	// };

	/* 減少頻繁傳送資料至父層 */
	const handleChange = useRef(
		lodash.debounce(() => {
			form.validateFields((err, values) => {
				console.log(err);
				if (!err) {
					onChange(values);
				} else {
					onChange(null);
				}
			});
		}, 500)
	).current;
	// const handleChange = () => {
	// 	form.validateFields((err, values) => {
	// 		console.log(err);
	// 		if (!err) {
	// 			onChange(values);
	// 		} else {
	// 			onChange(null);
	// 		}
	// 	});
	// };

	const formItemSchemas = [
		{
			key: 'checkbox',
			required: true,
			component: (
				<Checkbox
					onChange={e => {
						/* Check checkbox is checked */
						if (e.target.checked) {
							handleChange();
						} else {
							onChange(null);
						}
					}}
				>
					Agree
				</Checkbox>
			),
		},
		{
			key: 'signature',
			required: true,
			component: <Input onChange={handleChange} />,
		},
	];

	return (
		<Form className="common">
			<div className="common__data">
				I am content .... bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla ...
			</div>
			{formItemSchemas.map(formItemSchema => {
				const { key, required } = formItemSchema;
				return (
					<Form.Item key={key} className="formItem__component">
						{getFieldDecorator(key, {
							rules: [{ required }],
						})(formItemSchema.component)}
					</Form.Item>
				);
			})}
		</Form>
	);
};

Content.propTypes = {
	form: PropTypes.objectOf(PropTypes.any).isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Form.create({ name: 'content' })(Content);
