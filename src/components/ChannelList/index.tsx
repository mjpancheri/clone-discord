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
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="DS3" />
      <ChannelButton channelName="DOOM" />
    </Container>
  );
}

export default ChannelList;