<<<<<<< HEAD
import { useAuth } from 'contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { isAuthenticated } = useAuth;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todos');
    } else {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

=======
const HomePage = () => {
>>>>>>> 8700042235de5fd5803b7250e53ad1b7232cf8c0
  return <div>HomePage</div>;
};

export default HomePage;
