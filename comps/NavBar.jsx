import ButtonBack from "./ButtonBack";
import Image from "next/image";

const NavBar = ({ backHref }) => (
  <div className="fixed bg-zinc-800 w-full px-6 py-3 z-50">
    <div className="flex justify-between">
      <ButtonBack href={backHref} />
      <Image
        src="/itaewon_logo.svg"
        alt="Vercel Logo"
        height={45}
        width={175}
      />
      {/* <img src="/logo_menu_online.png" alt="itaewon x kland logo" width={200} /> */}
    </div>
  </div>
);

export default NavBar;
