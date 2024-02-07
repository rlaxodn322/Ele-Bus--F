import { CustomIcon } from '../CustomIcon';

export default function Error404() {
  return (
    <div style={{ padding: '200px 0', textAlign: 'center', fontSize: 30 }}>
      <CustomIcon name="warning circle" color="red" />
      404 : 페이지를 찾을 수 없습니다.
    </div>
  );
}
