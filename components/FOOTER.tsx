import {
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-[#120b29] text-white pt-10 pb-6 px-4 md:px-20'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
        {/* Column 1 */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>GroupBuy SEO Tools</h2>
          <p className='text-sm leading-relaxed text-gray-400'>
            Premium SEO tools at a fraction of the cost via our Group Buy model.
            Access the best marketing tools today!
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-gray-400 text-sm'>
            <li>
              <a href='#about' className='hover:text-white'>
                About Us
              </a>
            </li>
            <li>
              <a href='#features' className='hover:text-white'>
                Features
              </a>
            </li>
            <li>
              <a href='#pricing' className='hover:text-white'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#faq' className='hover:text-white'>
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Services</h3>
          <ul className='space-y-2 text-gray-400 text-sm'>
            <li>
              <a href='#' className='hover:text-white'>
                SEO Tools Access
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Affiliate Program
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Support
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
          <ul className='text-gray-400 text-sm space-y-2'>
            <li>
              <FaEnvelope className='inline mr-2 text-base' />
              <a
                href='mailto:support@groupbuyseotools.store'
                className='hover:text-white'
              >
                support@groupbuyseotools.store
              </a>
            </li>
            <li>
              <FaTelegramPlane className='inline mr-2 text-base' />
              <a href='https://t.me/groupbuyseo' className='hover:text-white'>
                @groupbuyseo
              </a>
            </li>
            <li>
              <FaWhatsapp className='inline mr-2 text-base' />
              <a href='https://wa.me/919876543210' className='hover:text-white'>
                WhatsApp Support
              </a>
            </li>
            <li>
              <FaFacebookF className='inline mr-2 text-base' />
              <a
                href='https://facebook.com/groupbuyseo'
                className='hover:text-white'
              >
                Facebook Page
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className='border-gray-600 my-6' />

      <p className='text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} GroupBuySEOTools.store – All rights
        reserved.
      </p>
    </footer>
  );
}
