export interface GelleryHeaderProps {
  //** Post의 제목입니다.*/
  title: string;
  //** Post를 작성한 유저 이름입니다.*/
  username: string;
  //** 임계값을 지났을 때 렌더링 되는 Title의 x위치입니다.*/
  positionX: number;
  //** 임계값을 지났을 때 렌더링 되는 Title의 너비입니다.*/
  width: number;
}
