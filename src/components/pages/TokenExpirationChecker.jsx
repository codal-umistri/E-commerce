import { useEffect, useState } from 'react';
import { Modal } from 'antd';

function TokenExpirationChecker() {
  const [expiredModalVisible, setExpiredModalVisible] = useState(false);
  const storedToken = localStorage.getItem('Auth');

  useEffect(() => {
    const isTokenExpired = (token) => {
      if (!token) return true;
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.exp * 1000 < Date.now();
    };

    const checkTokenExpiration = () => {
      if (isTokenExpired(storedToken)) {
        localStorage.removeItem('Auth');
        setExpiredModalVisible(true);
      }
    };

    const intervalId = setInterval(checkTokenExpiration, 1 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [storedToken]); 

  const handleModalOk = () => {
    setExpiredModalVisible(false);
    window.location.href = '/login';
  };

  return (
    <Modal
      title="Session Expired"
      visible={expiredModalVisible}
      centered
      onOk={handleModalOk}
      okText="OK"
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      <p>Your session has expired. You need to log in again.</p>
    </Modal>
  );
}

export default TokenExpirationChecker;
