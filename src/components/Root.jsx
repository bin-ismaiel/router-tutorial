import MainNav from "./MainNav";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
}
