const ListItem = ({ name, price, desc, className }) => (
  <div className={"flex-col pb-4  " + className}>
    <div className="text-sm flex gap-6 justify-between font-bengasi">
      <p>{name}</p>
      <p className="text-right self-center">{price}</p>
    </div>
    <div className="text-neutral-400 text-xs font-mono ">{desc}</div>
  </div>
);

export default ListItem;
