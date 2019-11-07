import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import { Form, Checkbox, Input } from 'antd';

import './common.scss';

const Content = ({ form, form: { getFieldDecorator }, onChange }) => {
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

	const formItemSchemas = [
		{
			key: 'checkbox',
			required: true,
			component: (
				<Checkbox
					defaultChecked={false}
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
		<div className="common">
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
		</div>
	);
};

Content.propTypes = {
	form: PropTypes.objectOf(PropTypes.any).isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Form.create({ name: 'content' })(Content);
