import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useApartments = (page, minRent, maxRent) => {
  const axiosSecure = useAxiosSecure();

  const queryKey = ["apartments", page, minRent, maxRent];

  const fetchApartments = async () => {
    let url = "";

    
    if (minRent !== "" && maxRent !== "") {
      url = `/apartments/search?min=${minRent}&max=${maxRent}&page=${page}&limit=6`;
    } else {
      
      url = `/apartments?page=${page}&limit=6`;
    }

    const res = await axiosSecure.get(url);
    return res.data;
  };

  return useQuery({
    queryKey,
    queryFn: fetchApartments,
    enabled: true, 
  });
};

export default useApartments;
