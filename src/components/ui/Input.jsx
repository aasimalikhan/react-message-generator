
// eslint-disable-next-line react/prop-types
export default function Input({ id, value, onChange, placeholder, className, size = 'md' }) {
    const sizeClasses =
      size === 'sm' ? 'text-sm px-3 py-2' : size === 'lg' ? 'text-lg px-4 py-3' : 'text-base px-4 py-2';
  
    return (
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeClasses} ${className}`}
      />
    );
  }