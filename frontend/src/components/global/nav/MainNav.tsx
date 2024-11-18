import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";


const MainNav = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button onClick={async () => {
      await loginWithRedirect();
    }} variant={'ghost'} className="font-semibold text-lg hover:text-orange-500 hover:bg-white">
      Log In
    </Button>
  );
}

export default MainNav;