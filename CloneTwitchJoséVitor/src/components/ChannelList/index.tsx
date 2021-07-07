import React from 'react';

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>FatBlack</Username>
          <Info>36 new videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  const ChannelItem2 = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>Gaules</Username>
          <Info>12 new videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  const ChannelItem3 = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>sacy</Username>
          <Info>12 new videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      <ChannelItem />
      <ChannelItem2 />
      <ChannelItem3 />
     
    </List>
  );
};

export default ChannelList;
