import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const useUserData = () => {
  // const [currentUserInfo, setCurrentUserInfo] = useState();
  // const [userLoading, setUserLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const email = user?.email;

  const { data: currentUserInfo = {}, isLoading } = useQuery({
    queryKey: ['currentUserInfo', email],
    queryFn: () =>
      fetch(`https://express-food-server.vercel.app/users/${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      }).then((res) => res.json()),
  });

  return [currentUserInfo?.data, isLoading];
};

export default useUserData;
