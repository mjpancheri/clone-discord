import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}
const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Marcio Pancheri" />

      <Role>Offline - 15</Role>
      <UserRow nickname="Assistente Virtual" isBot />
      <UserRow nickname="Huguinho" />
      <UserRow nickname="Luisinho" />
      <UserRow nickname="Pedrinho" />
      <UserRow nickname="Fulaninho" />
      <UserRow nickname="Chatinho" />
      <UserRow nickname="Incovenientinho" />
      <UserRow nickname="Zangadinho" />
      <UserRow nickname="Lindinha" />
      <UserRow nickname="Sabe Tudo" />
      <UserRow nickname="Capitão América" />
      <UserRow nickname="Superman" />
      <UserRow nickname="Batman" />
      <UserRow nickname="Spiderman" />
      <UserRow nickname="Atrasadinho" />
    </Container>
  );
}

export default UserList;