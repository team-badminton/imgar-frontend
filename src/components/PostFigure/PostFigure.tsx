import React, { ReactElement, useEffect, useRef, useState, Fragment } from 'react';

// styles
import { ContainerPicture, StyledFigure, StyledFigureCaption, StyledPicture } from './PostFigure.styled';

// types
import { PostFigureProps } from './PostFigure.type';

// hooks
import useThrottle from '@/hooks/useThrottle';

// components
import { MoreButton, Modal } from '@/components';

// etc
import { Link } from 'react-router-dom';

export default function PostFigure({
  imageId,
  orgImageWidth,
  orgImageHeight,
  description,
}: PostFigureProps): ReactElement {
  const imageRef = useRef<HTMLImageElement>(null);

  const [isZoomAble, setIsZoomAble] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isImageHover, setIsImageHover] = useState(false);

  const handleResizeObserver = useThrottle((entries: ResizeObserverEntry[]) => {
    const imgWidth = entries[0].borderBoxSize[0].inlineSize;
    const imgHeight = entries[0].borderBoxSize[0].blockSize;

    if (imgWidth < orgImageWidth || imgHeight < orgImageHeight) {
      setIsZoomAble(true);
    } else {
      setIsZoomAble(false);
    }
  }, 500);

  const handleToggleModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResizeObserver);

    resizeObserver.observe(imageRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handleMouseEnter = () => {
    setIsImageHover(true);
  };
  const handleMouseLeave = () => {
    setIsImageHover(false);
  };

  return (
    <>
      <StyledFigure key={imageId}>
        <ContainerPicture onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <StyledPicture
            isZoomAble={isZoomAble}
            ref={imageRef}
            imageId={imageId}
            onClick={isZoomAble ? handleToggleModal : null}
          />
          {isImageHover && <MoreButton className="more-btn" />}
          {isVisibleModal && (
            <Modal handleHide={handleToggleModal}>
              <StyledPicture isVisibleModal={isVisibleModal} isZoomAble={isZoomAble} imageId={imageId} />
            </Modal>
          )}
        </ContainerPicture>
        <StyledFigureCaption key={imageId}>
          {description
            ?.split(/(https?:\/\/[\w\/\.\-_=\?\&#$]+)|(\n)|(#.+)/)
            .filter(str => str)
            .map((str, index) =>
              str.includes('http') ? (
                <a key={str + index} href={str} target="_blank" rel="noopener noreferrer">
                  {str}
                </a>
              ) : str.includes('#') ? (
                <Link key={str + index} to={`t/${str.replace('#', '')}`}>
                  {str}
                </Link>
              ) : (
                <Fragment key={str + index}>{str}</Fragment>
              ),
            )}
        </StyledFigureCaption>
      </StyledFigure>
    </>
  );
}
