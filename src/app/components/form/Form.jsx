import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import Result from '../result/Result';
import BaseInfo from './base/BaseInfo';
import Agreement from './agreement/Agreement';

import './form.scss';

const FormSample = ({ form, form: { getFieldDecorator } }) => {
	const [result, setResult] = useState();
	const [error, setError] = useState(false);

	const handleSubmit = () => {
		form.validateFields((err, values) => {
			setError(err);
			if (!err) {
				setResult(JSON.stringify(values));
			} else {
				setResult(JSON.stringify(err));
			}
		});
	};

	const formItemSchemas = [
		{
			key: 'name',
			label: 'Name',
			initialValue: 'Input default value',
			required: true,
			message: 'Please enter your name',
			component: <Input />,
		},
		{
			key: 'baseInfo',
			label: 'Age / Height',
			initialValue: { age: 27, height: 170 },
			required: true,
			message: 'Please write down the base info',
			component: <BaseInfo />,
		},
		{
			key: 'aggrement',
			label: 'Aggrement',
			initialValue: {},
			required: true,
			message: 'Please finish this agreement',
			component: <Agreement onChange={ddd => console.log(ddd)} />,
		},
	];

	return (
		<div className="form">
			<Form className="form__form">
				{formItemSchemas.map(formItemSchema => {
					const {
						key,
						label,
						initialValue,
						required,
						message,
					} = formItemSchema;
					return (
						<div key={key} className="formItem">
							<div className="formItem__title">
								{required && (
									<div className="formItem__title-start">
										*
									</div>
								)}
								<div className="formItem__title-content">
									{`${label}:`}
								</div>
							</div>
							<Form.Item className="formItem__component">
								{getFieldDecorator(key, {
									validateTrigger: ['onChange'],
									initialValue,
									rules: [
										{
											required,
											message,
										},
									],
								})(formItemSchema.component)}
							</Form.Item>
						</div>
					);
				})}
			</Form>

			<Button className="form__submit" onClick={handleSubmit}>
				Submit
			</Button>

			<Result result={result} error={error} />
		</div>
	);
};

FormSample.propTypes = {
	form: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Form.create({ name: 'antFormSample' })(FormSample);
