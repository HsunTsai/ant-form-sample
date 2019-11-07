import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import Content from './pages/Content';
import Agree from './pages/Agree';
import Phone from './pages/Phone';

import './agreement.scss';

const { TabPane } = Tabs;

class Agreement extends Component {
	constructor(props) {
		super(props);
		// eslint-disable-next-line react/prop-types
		const { value } = props;
		if (value) {
			this.state = {
				content: value.content,
				agree: value.agree,
				phone: value.phone,
			};
		}
	}

	componentDidMount() {
		/* default check from */
		const { onChange } = this.props;
		onChange(null);
		this.setState({ error: true });
	}

	handleChange = (type, value) => {
		const { onChange } = this.props;
		const { content, agree, phone } = this.state;
		let changeData;
		// eslint-disable-next-line no-restricted-globals
		if (value)
			switch (type) {
				case 'content':
					this.setState({ content: value });
					if (agree && phone) {
						changeData = { content: value, agree, phone };
					}
					break;
				case 'agree':
					this.setState({ agree: value });
					if (content && phone) {
						changeData = { content, agree: value, phone };
					}
					break;
				case 'phone':
					this.setState({ phone: value });
					if (content && agree) {
						changeData = { content, agree, phone: value };
					}
					break;
				default:
			}

		onChange(changeData);
		this.setState({ error: !changeData });
	};

	render() {
		const { content, agree, phone, error } = this.state;
		return (
			<Tabs
				className={classNames('agreement', {
					'agreement--error': error,
				})}
				defaultActiveKey="1"
			>
				<TabPane tab="Tab 1" key="1">
					<Content
						content={content}
						onChange={value => this.handleChange('content', value)}
					/>
				</TabPane>
				<TabPane tab="Tab 2" key="2">
					<Agree
						agree={agree}
						onChange={value => this.handleChange('agree', value)}
					/>
				</TabPane>
				<TabPane tab="Tab 3" key="3">
					<Phone
						phone={phone}
						onChange={value => this.handleChange('phone', value)}
					/>
				</TabPane>
			</Tabs>
		);
	}
}

Agreement.defaultProp = {
	onChange: null,
};

Agreement.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default Agreement;
