import { HiOutlineLogout } from "react-icons/hi";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLogoutLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLogoutLoading} onClick={logout}>
      {!isLogoutLoading ? <HiOutlineLogout /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
