// src/components/ui/Button.jsx
// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick, variant = 'solid', size = 'md', className }) {
    const baseClasses = 'rounded-lg font-semibold focus:outline-none transition-all duration-200 ease-in-out';
    const variantClasses =
      variant === 'outline' ? 'border-2 border-blue-500 text-blue-500 hover:bg-blue-100' : 'bg-blue-500 text-white hover:bg-blue-600';
    const sizeClasses =
      size === 'sm' ? 'px-3 py-1 text-sm' : size === 'lg' ? 'px-6 py-3 text-lg' : 'px-4 py-2 text-base';
  
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      >
        {children}
      </button>
    );
  }