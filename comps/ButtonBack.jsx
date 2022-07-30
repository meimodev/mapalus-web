import Link from "next/link";

const ButtonBack = ({ href }) => (
  <Link href={href} passHref>
    <button className="text-gray-900">
      {/* <Image src="/back_arrow.svg" alt="back icon" height={20} width={20} /> */}
      <i className="las la-arrow-circle-left text-4xl" />
    </button>
  </Link>
);
export default ButtonBack;
