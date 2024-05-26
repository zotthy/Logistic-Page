import { Outlet, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Protect({ children }) {
  const navigate = useNavigate();

  if (!localStorage.getItem('Token')) {
    console.log('nie zalogowno');
    navigate('/login');
  }

  console.log('zalogowano');
  return (
      <>
        <Outlet />
        {children}
      </>
  );
}

export default Protect;