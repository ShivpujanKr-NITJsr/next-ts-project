export default function ToolList() {
  const tools = [
    { name: 'Ahrefs', logo: '/logos/globe.svg' },
    { name: 'SEMrush', logo: '/logos/vercel.svg' },
    // Add more tools as needed
  ];

  return (
    <section id='tools' className='py-16 '>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Our Tools</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {tools.map((tool) => (
            <div
              key={tool.name}
              className='bg-white p-4 rounded shadow hover:shadow-lg transition'
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className='h-12 mx-auto mb-2'
              />
              <p className='text-center font-medium'>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
