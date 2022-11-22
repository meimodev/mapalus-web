/* eslint-disable @next/next/no-img-element */
const PromoBubble = ({ onClick, image, text }) => (
  <div
    className="rounded-full w-20 h-20 flex flex-col drop-shadow-lg items-center justify-center bg-red-100"
    onClick={onClick}
  >
    {image ? <img src={image} alt="promo image" className="" /> : null}
    {text ? <div className="text-xs">{text}</div> : null}
  </div>
);

export default PromoBubble;
