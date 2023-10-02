interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'xl' | 'lg';
  children: React.ReactNode;
}
const Button = ({ children, className, size = 'md', ...props }: ButtonProps) => {
  return (
    <button
      className={`${size} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
