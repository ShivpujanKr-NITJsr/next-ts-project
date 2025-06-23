// components/PrivacyPolicy.tsx
'use client';

import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Consent',
    content:
      'By utilizing our service, you therefore agree to our Protection Strategy and consent to its terms.',
  },
  {
    title: 'Data we gather',
    content:
      'The individual data that you are approached to give, and the justifications for why you are approached to give it, will be clarified to you at the point we request that you give your data.\n\nIf you reach us straightforwardly, we might get extra data about you, for example, your name, email address, telephone number, the items in the message additional connections you might send us, and some other data you might decide to give.\n\nAt the point when you register for a Record, we might request your contact data, including things, for example, name, organization name, address, email address, and phone number.',
  },
  {
    title: 'How we utilize your data',
    content: `We utilize the data we gather in different ways, including:\n\n- Provide, operate, and maintain our website\n- Improve, personalize, and expand our website\n- Understand and analyze how you use our website\n- Develop new products, services, features, and functionality\n- Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes\n- Send you emails\n- Find and prevent fraud`,
  },
  {
    title: 'Log Documents',
    content:
      'Groupbuy SEOtools observes a guideline method for utilizing log records. These documents log guests when they visit sites. All facilitating organizations do this and are a piece of facilitating administrations’ examination. The data gathered by log records incorporates web convention (IP) addresses, program type, Network access Supplier (ISP), date and time stamp, alluding/leaving pages, and perhaps the number of snaps. These are not connected to any recognizable data. The reason for the data is for breaking down patterns, managing the webpage, following clients’ development on the site, and assembling segment data.',
  },
  {
    title: 'Advertising Partners Privacy Policies',
    content:
      'You might follow this rundown to find the Protection Strategy for every one of the publicizing accomplices of Groupbuy SEOtools.\n\nOutsider promotion waiters or advertisement networks utilize advancements like treats, JavaScript, or Web Signals that are utilized in their separate notices and connections that show up on Groupbuy SEOtools, which are sent straightforwardly to clients’ programs. They naturally accept your IP address when this happens. These innovations are utilized to quantify the adequacy of their publicizing efforts or potentially to customize the promoting content that you see on sites that you visit.\n\nNote that Groupbuy SEOtools has no admittance to or command over these treats that are utilized by outsider promoters.',
  },
  {
    title: 'Outsider Protection Strategies',
    content:
      'Groupbuy SEOtools Security Strategy doesn’t matter to different publicists or sites. Accordingly, we are encouraging you to counsel the particular Security Arrangements of these outsider promotion servers for more definite data. It might incorporate their practices and guidelines about how to quit specific choices.\n\nYou can decide to handicap treats through your program choices. To know more definite data about treating the board with explicit internet browsers, it very well may be tracked down on the programs’ sites.',
  },
  {
    title: 'CCPA Security Privileges (Don’t Sell My Data)',
    content:
      'Under the CCPA, among different freedoms, California shoppers reserve the privilege to:\n\n- Request that a business that gathers a buyer’s information unveils the classes and explicit bits of individual information that a business has gathered about customers.\n- Request that a business erase any private information about the shopper that a business has gathered.\n- Request that a business that sells a shopper’s peta, not sell the purchaser’s peta.\n\nIn the event that you make a solicitation, we have one month to answer you. On the off chance that you might want to practice any of these freedoms, kindly reach us.',
  },
  {
    title: 'GDPR Information Assurance Privileges',
    content:
      'We might want to ensure you are completely mindful of each of your information protection freedoms. Each client is qualified for the following:\n\n- The option to get to – You reserve the privilege to demand duplicates of your peta. We might charge you a little expense for this help.\n- The right to amendment – You reserve the privilege to demand that we correct any data you accept is erroneous. You additionally reserve the privilege to demand that we complete the data you accept is incomplete.\n- The right to deletion – You reserve the privilege to demand that we eradicate your peta, under specific circumstances.\n- The option to confine handling – You reserve the privilege to demand that we limit the handling of your peta, under specific circumstances.\n- The option to protest handling – You reserve the privilege to have a problem with our handling of your information, under specific circumstances.\n- The right to information transportability – You reserve the option to demand that we move the information that we have gathered to another association, or straightforwardly to you, under specific circumstances.\n\nIn the event that you make a solicitation, we have one month to answer you. Assuming that you might want to practice any of these privileges, kindly reach us.',
  },
  {
    title: 'Youngsters’ Data',
    content:
      'One more piece of our need is adding insurance for kids while utilizing the web. We urge guardians and gatekeepers to notice, partake in, and additionally screen and guide their internet-based movement.\n\nGroupbuy SEOtools purposely gathers no Private Recognizable Data from youngsters younger than 13. Assuming you feel that your kid gave this sort of data on our site, we unequivocally urge you to reach us right away and we will make our earnest attempts to eliminate such data from our records instantly.',
  },
  {
    title: 'Changes to This Security Strategy',
    content:
      'We might refresh our Security Strategy every now and then. Consequently, we encourage you to survey this page intermittently for any changes. We will inform you of any progressions by posting the new Security Strategy on this page. These progressions are taking effect right now after they are posted on this page.\n\nOur Protection Strategy was made with the assistance of the Reach Us\n\nAssuming you have any inquiries or ideas about our Protection Strategy, make sure to us.',
  },
];

export default function PrivacyPolicy() {
  return (
    <section className='max-w-7xl mx-auto px-4 py-12 bg-[#120b29] text-gray-200'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-4xl font-bold mb-6 text-center text-white'
      >
        Privacy Policy
      </motion.h1>

      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.6 }}
          className='mb-10'
        >
          <h2 className='text-2xl font-semibold text-white mb-3'>
            {section.title}
          </h2>
          <p className='text-gray-300 whitespace-pre-line leading-relaxed'>
            {section.content}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
