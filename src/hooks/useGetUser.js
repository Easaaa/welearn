import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../lib/firebase';

const useGetUser = () => {
  const { firebase, currentUser } = useContext(FirebaseContext);
  const [data, setData] = useState(null);
  const userErr = false;
  const [userLoad, setUserLoad] = useState(true);

  useEffect(() => {
    if (firebase && currentUser) {
      firebase.getUser(currentUser.uid).then((user) => {
        if (user) {
          setData(user);
          typeof window !== 'undefined' &&
            window.localStorage.setItem('userRole', JSON.stringify(user.role));
        }
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      setUserLoad(false);
    }
  }, [data]);

  return { userErr, userLoad, userData: data };
};

export default useGetUser;
