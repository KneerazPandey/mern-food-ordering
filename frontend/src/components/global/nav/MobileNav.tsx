import { Separator } from "@/components/ui/separator";
import { CircleUserRound, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const { logout, isAuthenticated, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-4">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-semibold gap-2 text-orange-500">
              <CircleUserRound className="text-orange-50" /> {user?.email}
            </span>
          ) : (
            <span>Welcome to MernEats.com!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          {isAuthenticated ? (
            <div className="flex flex-col gap-y-4">
              <Link
                to="/order-status"
                className="flex bg-white items-center font-bold hover:text-orange-500"
              >
                Order Status
              </Link>
              <Link
                to="/manage-restaurant"
                className="flex bg-white items-center font-bold hover:text-orange-500"
              >
                My Restaurant
              </Link>
              <Link
                to="/user-profile"
                className="flex bg-white items-center font-bold hover:text-orange-500"
              >
                User Profile
              </Link>
              <Button
                onClick={() => logout()}
                className="flex flex-1 items-center px-3 font-bold hover:bg-gray-500"
              >
                Log Out
              </Button>
            </div>
          ) : (
            <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
