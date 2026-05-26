export default function Card({ children, className = '', as: Element = 'div' }) {
  return <Element className={`panel p-5 transition duration-300 hover:-translate-y-1 hover:border-court-blue/50 hover:shadow-glow ${className}`}>{children}</Element>;
}
