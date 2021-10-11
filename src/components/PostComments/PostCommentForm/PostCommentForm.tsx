import React, { ReactElement, useEffect, useRef, useState } from 'react';

// components
import { Button } from '@/components';

// styled
import {
  StyledTextArea,
  StyledForm,
  Controlers,
  TextCounter,
  RightContainer,
  ImageUploadButtonContainer,
  PostButton,
} from './PostCommentForm.styled';

// assets
import { ReactComponent as ImageIcon } from '@/assets/Icon/imageIcon.svg';
import { ReactComponent as GifIcon } from '@/assets/Icon/gifIcon.svg';

// utils
import { pxToRem } from '@/util/styleUtils';

export default function PostCommentForm(): ReactElement {
  const [text, setText] = useState('');

  const textAreaRef = useRef<HTMLTextAreaElement>();
  const formRef = useRef<HTMLFormElement>();

  const MAX_TEXT_LENGTH = 140;

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (textAreaRef.current.value.length > MAX_TEXT_LENGTH || textAreaRef.current.value.length <= 0) {
      return;
    }
    textAreaRef.current.value = '';
  };

  useEffect(() => {
    textAreaRef.current.style.height = pxToRem(1);
    textAreaRef.current.style.height = pxToRem(textAreaRef.current.scrollHeight);
  }, [text]);

  useEffect(() => {
    formRef.current.addEventListener('submit', handleSubmit);

    return () => {
      formRef.current.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <StyledForm ref={formRef}>
      <StyledTextArea
        placeholder="Write a comment"
        value={text}
        color={MAX_TEXT_LENGTH - text.length < 0 ? 'crimsonRed' : null}
        onChange={e => {
          setText(e.target.value);
        }}
        ref={textAreaRef}
      />
      <Controlers>
        <span
          css={`
            font-size: ${pxToRem(12)};
          `}
        >
          Read the community rules
        </span>
        <RightContainer>
          <ImageUploadButtonContainer>
            <label htmlFor="files">
              <ImageIcon title="upload Image" />
            </label>
            <input
              type="file"
              id="files"
              name="files"
              accept=".jpg,.jpeg,.png,.gif,.apng,.tiff,.tif,.bmp,.xcf,.webp,.mp4,.mov,.avi,.webm,.mpeg,.flv,.mkv,.mpv,.wmv"
            />
          </ImageUploadButtonContainer>
          <Button img={GifIcon} alt="gif" />
          <TextCounter color={MAX_TEXT_LENGTH - text.length < 0 ? 'crimsonRed' : null}>
            {MAX_TEXT_LENGTH - text.length}
          </TextCounter>
          <PostButton color={text.length <= MAX_TEXT_LENGTH && text.length > 0 ? 'primaryColor' : null} type="submit">
            Post
          </PostButton>
        </RightContainer>
      </Controlers>
    </StyledForm>
  );
}
