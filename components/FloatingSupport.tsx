// app/components/FloatingSupport.tsx
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

export default function FloatingSupport() {
  return (
    <>
      {/* Left - Telegram */}
      <a
        href='https://t.me/groupbuyseo'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed left-4 bottom-8 z-50 bg-[#0088cc] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform'
      >
        <FaTelegramPlane size={24} />
      </a>

      {/* Right - WhatsApp */}
      <a
        href='https://wa.me/919876543210'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed right-4 bottom-8 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform'
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
}
