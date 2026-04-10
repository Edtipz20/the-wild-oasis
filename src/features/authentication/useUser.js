import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/useAuth";

export function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, data, isAuthenticated: data?.role === "authenticated" };
}
