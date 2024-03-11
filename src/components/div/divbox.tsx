import React from 'react';
import Button3 from '../../components/button/button3';
import { deleteItemAPI } from '../../components/apis/item/item'; // 경로는 실제 파일 위치에 맞게 수정해주세요

interface DivBoxprops {
  a?: string; // 'a' 속성을 선택적으로 받도록 변경
  b?: string; // 'b' 속성을 선택적으로 받도록 변경
  c?: string; // 'b' 속성을 선택적으로 받도록 변경
  d?: string; // 'b' 속성을 선택적으로 받도록 변경
  e?: string; // 'b' 속성을 선택적으로 받도록 변경
  number: string; // 추가: 삭제할 아이템의 고유 번호
}

const DivBox: React.FC<DivBoxprops> = ({ a, b, c, d, e, number }) => {
  const handleDelete = async () => {
    try {
      // 아이템 삭제 API 호출
      await deleteItemAPI(number);
      // 삭제 후 필요한 작업 수행 (예: 화면 리로드)
      window.location.reload();
    } catch (error) {
      console.error('아이템 삭제 에러:', error);
      // 에러 처리 로직 추가 (예: 사용자에게 알림)
    }
  };
  return (
    <>
      <div style={{ color: 'gray' }}>
        <div
          style={{
            width: '80%',
            height: '30px',
            border: '1px solid lightgray',
            borderRadius: '5px',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          부품번호: {a}
        </div>
        <div
          style={{
            width: '80%',
            height: '30px',
            border: '1px solid lightgray',
            borderRadius: '5px',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          담당 이름: {b}
        </div>
        <div
          style={{
            width: '80%',
            height: '30px',
            border: '1px solid lightgray',
            borderRadius: '5px',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          등록일자: {c}
        </div>
        <div
          style={{
            width: '80%',
            height: '30px',
            border: '1px solid lightgray',
            borderRadius: '5px',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          부품이름: {d}
        </div>
        <div
          style={{
            width: '80%',
            height: '30px',
            border: '1px solid lightgray',
            borderRadius: '5px',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          기타사항: {e}
        </div>
      </div>
      <Button3 a="편집" b="삭제" c="취소" onClick={handleDelete} />
    </>
  );
};

export default DivBox;
