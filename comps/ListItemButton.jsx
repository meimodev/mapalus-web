import Link from "next/link";

const ListItemButton = ({ title, href }) => (
  <Link href={href} passHref>
    <button className=" w-full my-3 bg-transparent rounded-md border-2 border-gray-100 text-gray-100 ">
      <div className="py-3 xs:py-2 text-center font-bengasi text-lg xs:text-sm ">
        <p>{title}</p>
      </div>
    </button>
  </Link>
);
export default ListItemButton;
