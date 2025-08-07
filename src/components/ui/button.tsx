import * as React from "react";

export const Button = React.forwardRef(({ className = "", children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";
