import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const useUserData = () => {
  const [currentUserInfo, setCurrentUserInfo] = useState();
  const [userLoading, setUserLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const email = user?.email;
  useEffect(() => {
    setUserLoading(true);
    fetch(`http://localhost:5000/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUserInfo(data?.data);
        if (data.status) {
          setUserLoading(false);
        }
      });
  }, [email]);

  return [currentUserInfo, userLoading];
};

export default useUserData;
