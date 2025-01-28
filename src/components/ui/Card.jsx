

// eslint-disable-next-line react/prop-types
export default function Card({ children, className }) {
    return (
      <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }