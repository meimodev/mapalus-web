/* eslint-disable @next/next/no-img-element */
import ButtonBack from "./ButtonBack";
import Image from "next/image";

const NavBar = ({ backHref, navBarClassName, buttonClassName }) => (
  <div className={"fixed w-full px-6 py-3 z-50 " + navBarClassName}>
    <div className="flex justify-between">
      <ButtonBack href={backHref} buttonClassName={buttonClassName} />
      <img
        src="/itaewon_logo.png"
        className="h-16 bg-no-repeat bg-cover"
        alt="Itaewon x Kland logo"
      />
      {/* <img src="/logo_menu_online.png" alt="itaewon x kland logo" width={200} /> */}
    </div>
  </div>
);

export default NavBar;
