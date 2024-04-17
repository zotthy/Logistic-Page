import { Outlet, useNavigate } from 'react-router-dom';

function Protect() {
  const navigate = useNavigate();

  if (!localStorage.getItem('Token')) {
    navigate('/login');
  }
  
  return <Outlet />;
}

export default Protect;