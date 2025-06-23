export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full  shadow z-50 px-4 py-3 flex gap-6 justify-center'>
      <a href='#hero' className='hover:text-blue-600'>
        Home
      </a>
      <a href='#tools' className='hover:text-blue-600'>
        Tools
      </a>
      <a href='#pricing' className='hover:text-blue-600'>
        Pricing
      </a>
      <a href='#faq' className='hover:text-blue-600'>
        FAQ
      </a>
    </nav>
  );
}
