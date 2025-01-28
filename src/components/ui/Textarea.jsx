

// eslint-disable-next-line react/prop-types
export default function Textarea({ value, onChange, placeholder, className, rows = 4, size = 'md' }) {
    const sizeClasses =
      size === 'sm' ? 'text-sm p-2' : size === 'lg' ? 'text-lg p-3' : 'text-base p-3';
  
    return (
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeClasses} ${className}`}
      />
    );
  }