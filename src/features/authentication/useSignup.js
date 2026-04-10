import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/useAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending: isSignupLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: (user) => {
      toast.success("New user has been successfully added");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isSignupLoading };
}
