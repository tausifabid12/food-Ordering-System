import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { data: cartProducts = [], refetch } = useQuery({
    queryKey: ["cartProducts", user?.email],
    queryFn: () =>
      fetch(
        `https://express-food-server.vercel.app/cart?email=${user?.email}`
      ).then((res) => res.json()),
  });

  return [cartProducts, refetch];
};

export default useCart;
