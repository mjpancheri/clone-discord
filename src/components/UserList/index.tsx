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
  const users = [
    "Huguinho",
    "Luisinho",
    "Pedrinho",
    "Fulaninho",
    "Chatinho",
    "Incovenientinho",
    "Zangadinho",
    "Lindinha",
    "Sabe Tudo",
    "Capitão América",
    "Superman",
    "Batman",
    "Spiderman",
    "Atrasadinho",
  ];
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Marcio Pancheri" />
      <UserRow nickname="Assistente Virtual" isBot />

      <Role>Offline - 15</Role>
      {
        users.map((u) => (
          <UserRow key={Math.random()} nickname={u} />
        ))
      }
      
      {/* <UserRow nickname="Luisinho" />
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
      <UserRow nickname="Atrasadinho" /> */}
    </Container>
  );
}

export default UserList;