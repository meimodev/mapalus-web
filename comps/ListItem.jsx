const ListItem = ({ name, price, desc, className }) => (
  <div className={"flex-col pb-1  " + className}>
    <div className="text-sm flex justify-between font-bengasi">
      <p>{name}</p>
      <p>{price}</p>
    </div>
    <div className="text-neutral-400 text-xs font-mono ">{desc}</div>
  </div>
);

export default ListItem;
