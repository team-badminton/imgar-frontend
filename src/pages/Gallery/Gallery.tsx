import React, { ReactElement } from 'react';

// components
import { PostComments, PostFigure, PostHeader } from '@/components';
import MainContainer from '@/components/MainContainer/MainContainer';

// styles
import { GalleryContainer } from './Gallery.styled';

// types
import { useLocationProps } from './Gallery.type';

//apis
import { usePostQuery } from '@/redux/api';

// etc
import { useHistory, useLocation, useParams } from 'react-router-dom';

export default function Gallery(): ReactElement {
  const location = useLocation<useLocationProps>();
  const history = useHistory();
  const param = useParams<{ id: string }>();
  const { data, error, isLoading } = usePostQuery({ postId: param.id });
  return (
    <MainContainer sticky customHeader={<div>커스템 헤더에 들어갈 내용 테스트</div>}>
      {isLoading ? (
        'loading'
      ) : (
        <GalleryContainer>
          <PostHeader
            username={data.accountName}
            title={data.title}
            metaInfos={{ time: data.dateTime, views: data.views, platform: 'Iphone' }}
          />
          <ul>
            {data?.images.map(({ id, type, imageWidth, imageHeight, description }) => (
              <PostFigure
                key={id}
                type={type}
                imageId={id}
                orgImageWidth={imageWidth}
                orgImageHeight={imageHeight}
                description={description}
              />
            ))}
          </ul>
          <div>
            <PostComments postId={param.id} />
          </div>
        </GalleryContainer>
      )}
    </MainContainer>
  );
}
