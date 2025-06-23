'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const tools = [
  { name: 'Ahrefs', logo: '/logos/ahrefs.png' },
  { name: 'SEMrush', logo: '/logos/semrush.png' },
  { name: 'Moz', logo: '/logos/moz.png' },
  { name: 'Grammarly', logo: '/logos/grammarly.png' },
  { name: 'Jasper', logo: '/logos/jasper.png' },
  { name: 'Wordtune', logo: '/logos/wordtune.png' },
  { name: 'Canva', logo: '/logos/canva.png' },
  { name: 'Envato', logo: '/logos/envato.png' },
  { name: 'SurferSEO', logo: '/logos/surfer.png' },
  { name: 'Ubersuggest', logo: '/logos/ubersuggest.png' },
  { name: 'Copyscape', logo: '/logos/copyscape.png' },
  { name: 'Pictory', logo: '/logos/pictory.png' },
  { name: 'Veed', logo: '/logos/veed.png' },
  { name: 'Frase', logo: '/logos/frase.png' },
  { name: 'Writer', logo: '/logos/writer.png' },
  { name: 'AISEO', logo: '/logos/aiseo.png' },
  { name: 'Scalenut', logo: '/logos/scalenut.png' },
  { name: 'Kuki', logo: '/logos/kuki.png' },
  { name: 'Piktochart', logo: '/logos/piktochart.png' },
  { name: 'Lumen5', logo: '/logos/lumen5.png' },
  { name: 'Copy.ai', logo: '/logos/copyai.png' },
  { name: 'WordHero', logo: '/logos/wordhero.png' },
  { name: 'TextCortex', logo: '/logos/textcortex.png' },
  { name: 'ChatGPT', logo: '/logos/chatgpt.png' },
  { name: 'Scribe', logo: '/logos/scribe.png' },
  { name: 'DeepAI', logo: '/logos/deepai.png' },
  { name: 'CopySmith', logo: '/logos/copysmith.png' },
  { name: 'Anyword', logo: '/logos/anyword.png' },
  { name: 'Articoolo', logo: '/logos/articoolo.png' },
  { name: 'Scibids', logo: '/logos/scibids.png' },
  { name: 'Snazzy', logo: '/logos/snazzy.png' },
  { name: 'Rytr', logo: '/logos/rytr.png' },
  { name: 'Zyro', logo: '/logos/zyro.png' },
  { name: 'CopyMonkey', logo: '/logos/copymonkey.png' },
  { name: 'QuillBot', logo: '/logos/quillbot.png' },
  { name: 'NeuralText', logo: '/logos/neuraltext.png' },
  { name: 'WriteSonic', logo: '/logos/writesonic.png' },
  { name: 'SlickWrite', logo: '/logos/slickwrite.png' },
  { name: 'AI Writer', logo: '/logos/aiwriter.png' },
  { name: 'TextRanch', logo: '/logos/textranch.png' },
  { name: 'ContentBot', logo: '/logos/contentbot.png' },
  { name: 'Shuffl', logo: '/logos/shuffl.png' },
  { name: 'Frase.io', logo: '/logos/fraseio.png' },
  { name: 'Text.ai', logo: '/logos/textai.png' },
  { name: 'AI Content', logo: '/logos/aicontent.png' },
  { name: 'ContentKing', logo: '/logos/contentking.png' },
  { name: 'ProwritingAid', logo: '/logos/prowritingaid.png' },
  { name: 'Narrato', logo: '/logos/narrato.png' },
  { name: 'INK', logo: '/logos/ink.png' },
  { name: 'WriteSonic', logo: '/logos/writesonic.png' },
  { name: 'ChatSonic', logo: '/logos/chatsonic.png' },
  { name: 'Copy.ai', logo: '/logos/copyai.png' },
  { name: 'Jasper.ai', logo: '/logos/jasperai.png' },
  { name: 'Sudowrite', logo: '/logos/sudowrite.png' },
  { name: 'Wordsmith', logo: '/logos/wordsmith.png' },
  { name: 'ContentBot', logo: '/logos/contentbot.png' },
  { name: 'CreativityAI', logo: '/logos/creativityai.png' },
  { name: 'AI Writer', logo: '/logos/aiwriter.png' },
  { name: 'Gong.io', logo: '/logos/gongio.png' },
  { name: 'SurferSEO', logo: '/logos/surferseo.png' },
  { name: 'BuzzSumo', logo: '/logos/buzzsumo.png' },
  { name: 'Topic', logo: '/logos/topic.png' },
  { name: 'SE Ranking', logo: '/logos/seranking.png' },
  { name: 'BuzzStream', logo: '/logos/buzzstream.png' },
  { name: 'ScreamingFrog', logo: '/logos/screamingfrog.png' },
  { name: 'Serpstat', logo: '/logos/serpstat.png' },
  { name: 'SEO PowerSuite', logo: '/logos/seopowersuite.png' },
  { name: 'SpyFu', logo: '/logos/spyfu.png' },
  { name: 'KeywordTool.io', logo: '/logos/keywordtool.png' },
  { name: 'Long Tail Pro', logo: '/logos/longtailpro.png' },
  { name: 'LinkResearchTools', logo: '/logos/linkresearchtools.png' },
  { name: 'Majestic', logo: '/logos/majestic.png' },
  { name: 'SEO Site Checkup', logo: '/logos/seositecheckup.png' },
  { name: 'SEOquake', logo: '/logos/seoquake.png' },
  { name: 'Ubersuggest', logo: '/logos/ubersuggest.png' },
  { name: 'SEOptimer', logo: '/logos/seoptimizer.png' },
  { name: 'WooRank', logo: '/logos/woorank.png' },
  { name: 'Google Search Console', logo: '/logos/googlesearchconsole.png' },
  { name: 'Siteliner', logo: '/logos/siteliner.png' },
  { name: 'Seobility', logo: '/logos/seobility.png' },
  { name: 'SEO Tester Online', logo: '/logos/seo-tester.png' },
  { name: 'Sitebulb', logo: '/logos/sitebulb.png' },
  { name: 'WebCEO', logo: '/logos/webceo.png' },
  { name: 'DigiCert', logo: '/logos/digicert.png' },
  { name: 'SE Ranking', logo: '/logos/seranking.png' },
  { name: 'Rank Math', logo: '/logos/rankmath.png' },
  { name: 'Screpy', logo: '/logos/screpy.png' },
  { name: 'SurferSEO', logo: '/logos/surferseo.png' },
  { name: 'Ahrefs', logo: '/logos/ahrefs.png' },
];

const orbitConfigs = [
  { radius: 90, speed: 40, numTools: 10 },
  { radius: 140, speed: 60, numTools: 15 },
  { radius: 190, speed: 80, numTools: 20 },
  { radius: 240, speed: 100, numTools: 25 },
];

export const HeroSection = () => {
  let toolIndex = 0;

  return (
    <section className='min-h-screen w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-20 bg-[var(--bg-dark)]'>
      {/* Left */}
      <div className='w-full md:w-1/2 space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight text-[var(--text-light)]'>
          <span className='text-[var(--accent)]'>All-in-One SEO Tool</span>{' '}
          Galaxy
        </h1>
        <p className='text-lg text-[var(--text-muted)]'>
          Explore 90+ premium tools orbiting around your needs — all under one
          subscription.
        </p>
        <div className='flex gap-4'>
          <button className='button-primary'>Start Free Trial</button>
          <button className='border border-[var(--border-color)] px-6 py-2 rounded-xl text-[var(--text-light)] hover:bg-white hover:text-black transition'>
            Explore Galaxy
          </button>
        </div>
      </div>

      {/*Right /}
<div className="relative w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
<div className="absolute">
{/ Orbit 1 */}
      {orbitConfigs.map((orbitConfig, index) => {
        const toolsInOrbit = tools.slice(
          toolIndex,
          toolIndex + orbitConfig.numTools
        );
        toolIndex += orbitConfig.numTools;
        return (
          <motion.div
            key={index}
            className='absolute'
            style={{
              width: `${orbitConfig.radius * 2}px`,
              height: `${orbitConfig.radius * 2}px`,
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: orbitConfig.speed,
              ease: 'linear',
            }}
          >
            <div
              className='w-full h-full absolute'
              style={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: '0',
                left: '0',
              }}
            >
              {toolsInOrbit.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className='absolute'
                  style={{
                    transform: `rotate(${
                      (index * 360) / toolsInOrbit.length
                    }deg) translate(${orbitConfig.radius}px)`,
                    transformOrigin: 'center',
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className='rounded-full shadow-lg hover:scale-110 transition-all'
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};
