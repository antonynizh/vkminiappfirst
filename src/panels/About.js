import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div, Group} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const About = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			About
		</PanelHeader>
		<Group title="Fuck">
			<Div>
				It works!
			</Div>
		</Group>
	</Panel>
);

class Videos extends React.Component {
	render() {

			this.getObjectUrl('https://vk.com/video_ext.php?oid=-9099896&id=456239279&hash=1b355cbe6355a5dd&__ref=vk.api&api_hash=15543777299b9470af795f99b5cd_GM4TKNJQHE3TG')
		
	}
}

About.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default About;
