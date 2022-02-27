import React from 'react';
import Menu from '../Menu/Menu';
import Alert from '@mui/material/Alert';
import './layout.css';
import { useDispatch, useSelector } from 'react-redux';

const Layout = ({ children }) => {

  const errorMessage = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(clearError());
  }


  return (
    <div>
      <Menu />
      {errorMessage && (
        <div>
          <Alert
            onDismiss={handleDismiss}
            severity='error'>
            {errorMessage}
            </Alert>
        </div>
      )}
      <div className='Layout-content'>{children}</div>
    </div>
  );
};

export default Layout;