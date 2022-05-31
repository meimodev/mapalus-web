import MetaDefault from "../../comps/mapalus/_meta";

const Support = () => {
  const Heading2 = ({ children }) => (
    <h2 className="font-bold text-xl py-4">{children}</h2>
  );

  const Heading3 = ({ children }) => (
    <h3 className="font-bold text-xl py-4">{children}</h3>
  );

  const Heading4 = ({ children }) => (
    <h4 className="font-bold text-md py-1">{children}</h4>
  );

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
            <h1 className="text-xs">2022 |</h1>
            <h1 className="px-2 font-bold">MEIMO</h1>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="bg-white px-12 pt-4 pb-12 font-poppins">
        <MetaDefault />

        <h1 className="font-bold text-4xl py-6">Privacy Policy</h1>

        <Paragraph>Effective date: May 13,2022</Paragraph>

        <Paragraph>
          Mapalus pasar online minahasa (&#34;us&#34;, &#34;we&#34;, or
          &#34;our&#34;) operates the mobile application (the
          &#34;Service&#34;).
        </Paragraph>

        <Paragraph>
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data when you use our Service and the
          choices you have associated with that data.
        </Paragraph>

        <Paragraph>
          We use your data to provide and improve the Service. By using the
          Service, you agree to the collection and use of information in
          accordance with this policy. Unless otherwise defined in this Privacy
          Policy, terms used in this Privacy Policy have the same meanings as in
          our Terms and Conditions.
        </Paragraph>

        <Heading2>Information Collection And Use</Heading2>

        <Paragraph>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </Paragraph>

        <Heading3>Types of Data Collected</Heading3>

        <Heading4>Personal Data</Heading4>

        <Paragraph>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you (&#34;Personal Data&#34;). Personally identifiable
          information may include, but is not limited to:
        </Paragraph>

        <List>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Cookies and Usage Data</li>
        </List>

        <Heading4>Usage Data</Heading4>

        <Paragraph>
          When you access the Service by or through a mobile device, we may
          collect certain information automatically, including, but not limited
          to, the type of mobile device you use, your mobile device unique ID,
          the IP address of your mobile device, your mobile operating system,
          the type of mobile Internet browser you use, unique device identifiers
          and other diagnostic data (&#34;Usage Data&#34;).
        </Paragraph>

        <Heading4>Tracking & Cookies Data</Heading4>
        <Paragraph>
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information.
        </Paragraph>
        <Paragraph>
          Cookies are files with small amount of data which may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          website and stored on your device. Tracking technologies also used are
          beacons, tags, and scripts to collect and track information and to
          improve and analyze our Service.
        </Paragraph>
        <Paragraph>
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies,
          you may not be able to use some portions of our Service.
        </Paragraph>
        <Paragraph>Examples of Cookies we use:</Paragraph>
        <List>
          <li>
            <strong>Session Cookies.</strong> We use Session Cookies to operate
            our Service.
          </li>
          <li>
            <strong>Preference Cookies.</strong> We use Preference Cookies to
            remember your preferences and various settings.
          </li>
          <li>
            <strong>Security Cookies.</strong> We use Security Cookies for
            security purposes.
          </li>
        </List>

        <Heading2>Use of Data</Heading2>

        <Paragraph>
          Mapalus pasar online minahasa uses the collected data for various
          purposes:
        </Paragraph>
        <List>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer care and support</li>
          <li>
            To provide analysis or valuable information so that we can improve
            the Service
          </li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </List>

        <Heading2>Transfer Of Data</Heading2>
        <Paragraph>
          Your information, including Personal Data, may be transferred to — and
          maintained on — computers located outside of your state, province,
          country or other governmental jurisdiction where the data protection
          laws may differ than those from your jurisdiction.
        </Paragraph>

        <Paragraph>
          If you are located outside United States and choose to provide
          information to us, please note that we transfer the data, including
          Personal Data, to United States and process it there.
        </Paragraph>

        <Paragraph>
          Your consent to this Privacy Policy followed by your submission of
          such information represents your agreement to that transfer.
        </Paragraph>

        <Paragraph>
          Mapalus pasar online minahasa will take all steps reasonably necessary
          to ensure that your data is treated securely and in accordance with
          this Privacy Policy and no transfer of your Personal Data will take
          place to an organization or a country unless there are adequate
          controls in place including the security of your data and other
          personal information.
        </Paragraph>

        <Heading2>Location Information(GPS)</Heading2>
        <Paragraph>
          Yes, we ask users for their location through our app/website.
        </Paragraph>

        <Heading2>Disclosure Of Data</Heading2>

        <Heading3>Legal Requirements</Heading3>
        <Paragraph>
          Mapalus pasar online minahasa may disclose your Personal Data in the
          good faith belief that such action is necessary to:
        </Paragraph>

        <List>
          <li>To comply with a legal obligation</li>
          <li>
            To protect and defend the rights or property of Mapalus pasar online
            minahasa
          </li>
          <li>
            To prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li>
            To protect the personal safety of users of the Service or the public
          </li>
          <li>To protect against legal liability</li>
        </List>

        <Heading2>Security Of Data</Heading2>
        <Paragraph>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
        </Paragraph>

        <Heading2>Service Providers</Heading2>
        <Paragraph>
          We may employ third party companies and individuals to facilitate our
          Service (&#34;Service Providers&#34;), to provide the Service on our
          behalf, to perform Service-related services or to assist us in
          analyzing how our Service is used.
        </Paragraph>

        <Paragraph>
          These third parties have access to your Personal Data only to perform
          these tasks on our behalf and are obligated not to disclose or use it
          for any other purpose.
        </Paragraph>

        <Heading2>App Permissions</Heading2>
        <List>
          <li>ACCESS_FINE_LOCATION</li>
          <li>ACCESS_COARSE_LOCATION</li>
          <li>INTERNET</li>
        </List>

        <Heading2>Analytics</Heading2>
        <Paragraph>
          We may use third-party Service Providers to monitor and analyze the
          use of our Service.
        </Paragraph>

        <List>
          <li>
            <Paragraph>
              <strong>Google Analytics</strong>
            </Paragraph>
            <Paragraph>
              Google Analytics is a web analytics service. You can visit the
              <a
                href="https://policies.google.com/privacy"
                className="font-bold text-blue-400 px-2"
              >
                Google Privacy Policy page
              </a>
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <strong>Firebase</strong>
            </Paragraph>
            <Paragraph>
              Firebase is a app analytics tool. You can read the
              <a
                href="https://firebase.google.com/support/privacy/"
                className="font-bold text-blue-400 px-2"
              >
                Privacy Policy for Firebase
              </a>
            </Paragraph>
          </li>
        </List>

        <Heading2>Purchase for products/services</Heading2>

        <Paragraph>
          No, we do not sell or allow users to pay for products/services
        </Paragraph>
        <Heading2>
          Remarketing services for marketing &amp; advertising purposes
        </Heading2>

        <Paragraph>No</Paragraph>
        <Heading2>Links To Other Sites</Heading2>
        <Paragraph>
          Our Service may contain links to other sites that are not operated by
          us. If you click on a third party link, you will be directed to that
          third party&#34;s site. We strongly advise you to review the Privacy
          Policy of every site you visit.
        </Paragraph>
        <Paragraph>
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </Paragraph>

        <Heading2>Children&#34;s Privacy</Heading2>
        <Paragraph>
          Our Service does not address anyone under the age of 18
          (&#34;Children&#34;).
        </Paragraph>
        <Paragraph>
          We do not knowingly collect personally identifiable information from
          anyone under the age of 18. If you are a parent or guardian and you
          are aware that your Children has provided us with Personal Data,
          please contact us. If we become aware that we have collected Personal
          Data from children without verification of parental consent, we take
          steps to remove that information from our servers.
        </Paragraph>

        <Heading2>Changes To This Privacy Policy</Heading2>
        <Paragraph>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </Paragraph>
        <Paragraph>
          We will let you know via email and/or a prominent notice on our
          Service, prior to the change becoming effective and update the
          &#34;effective date&#34; at the top of this Privacy Policy.
        </Paragraph>
        <Paragraph>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </Paragraph>

        <Heading2>Contact Us</Heading2>
        <Paragraph>
          If you have any questions about this Privacy Policy, you can contact
          us ny:
        </Paragraph>
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
        </List>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
