export default function Card({ children, className = '', as: Element = 'div', ...props }) {
  return <Element className={`panel motion-card p-5 ${className}`} {...props}>{children}</Element>;
}
