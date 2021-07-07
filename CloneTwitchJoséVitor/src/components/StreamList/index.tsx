import React from 'react';

import streamThumbnail from '../../images/boti1.jpg';
import streamThumbnail2 from '../../images/Saulin.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail2} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>FatBlack</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Jogando Vavazinho
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Valorant
          </StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Valorant</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  );


  const StreamItem2 = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>Gaules</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Jogando Cszinho
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Cs
          </StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Cs</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  );

  const StreamItem3 = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>Sacy</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Jogando Valorantante
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Valorant
          </StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Valorant</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem2 />
      <StreamItem3 />
      
    </List>
  );
};

export default StreamList;
