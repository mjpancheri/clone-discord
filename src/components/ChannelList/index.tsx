import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="chat-livre" selected={true}/>
      <ChannelButton channelName="sga-chat" />
      <ChannelButton channelName="sgo-chat" />
      <ChannelButton channelName="dev-live" />
    </Container>
  );
}

export default ChannelList;