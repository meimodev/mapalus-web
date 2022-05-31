import Meta from "../Meta";

const MetaDefault = ({title = ''}) => {
  return (
    <Meta
      title={title? title:"Mapalus | Pasar online minahasa"}
      description="Pasar online minahasa, manado, amurang, airmadidi, tondano, tomohon"
      color="#ffb600"
    />
  );
};

export default MetaDefault;
