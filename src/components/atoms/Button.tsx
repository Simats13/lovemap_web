interface ButtonProps {
  variant: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const Button = ({ variant, children, href, onClick }: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-300";
  const styles = {
    primary: `${baseStyles} bg-indigo-600 text-white hover:bg-indigo-700`,
    secondary: `${baseStyles} bg-gray-100 text-gray-900 hover:bg-gray-200`,
    outline: `${baseStyles} border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50`,
  };

  if (href) {
    return (
      <a href={href} className={styles[variant]}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
};

export default Button;
