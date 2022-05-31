import MetaDefault from "../../comps/mapalus/_meta";

const Privacy = () => {
  const Heading2 = ({ children }) => (
    <h2 className="font-bold text-xl py-4">{children}</h2>
  );

  // const Heading3 = ({ children }) => (
  //   <h3 className="font-bold text-xl py-4">{children}</h3>
  // );

  // const Heading4 = ({ children }) => (
  //   <h4 className="font-bold text-md py-1">{children}</h4>
  // );

  const Paragraph = ({ children }) => <p className="py-2">{children}</p>;

  const List = ({ children }) => <ul className="px-6 list-disc">{children}</ul>;

  const Footer = () => (
    <div className="text-gray-100 pt-6 pb-8 px-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl py-2">Mapalus | pasar online minahasa</h1>
          <div className="text-sm">
            <p>Kompleks pasar bawah, Wawalintouan, Tondano</p>
            <p>meimodev@gmail.com</p>
            <p>+62 895 2569 9078</p>
            <p>www.mapalusindonesia.com</p>
          </div>
        </div>

        <div className="self-end">
          <div className="pb-4 w-40">
            <img src="/mapalus.svg" alt="Mapalus logo" />
          </div>
          <div className="flex font-poppins items-center justify-end">
            <h1 className="text-xs">{new Date().getFullYear()} |</h1>
            <h1 className="px-2 font-bold">MEIMO</h1>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="bg-white px-12 pt-4 pb-12 font-poppins">
        <MetaDefault title="Mapalus | Support" />

        <h1 className="font-bold text-4xl py-6">Support</h1>

        <Paragraph>
          If you have anything to ask about this app, feel free to drop us a
          line ;)
        </Paragraph>

        <Heading2>Contact Us</Heading2>
        <List>
          <li>
            email
            <a
              href="mailto:meimodev@gmail.com"
              className="font-bold text-blue-400 px-2"
            >
              meimodev@gmail.com
            </a>
          </li>
          <li>phone +62 895 2569 9078</li>
          <li>whatsapp +62 895 2569 9078</li>
          <li>telegram +62 895 2569 9078</li>
        </List>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
