import React, { useRef, useEffect } from 'react';

import { Container , Messages, InputWrapper, Input, InputIcon} from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }
  },[messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
            key={n}
            author="Marcio Pancheri"
            date={`${n}/06/2020`}
            content={`Teste de mensagem ${n}...`}
        />
        ))}
        <ChannelMessage 
          author="Marcio Pancheri"
          date="24/06/2020"
          content="Hoje é dia de São João Batista!"
        />

        <ChannelMessage 
          author="Assistente Virtual"
          date="24/06/2020"
          content={
            <>
              <Mention>@Marcio Pancheri</Mention>, então hj é aniversário de Rio Claro!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;