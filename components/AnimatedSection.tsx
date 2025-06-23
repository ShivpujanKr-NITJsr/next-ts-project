import { useInView } from '../hooks/useInView';

interface Props {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<Props> = ({ children }) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-opacity transform duration-700 ease-in-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
