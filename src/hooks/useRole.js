import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`/api/users/role/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setRole(data.role); // example: "admin", "member", "user"
          setIsLoading(false);
        });
    }
  }, [user]);

  return { role, isLoading };
};

export default useRole;
