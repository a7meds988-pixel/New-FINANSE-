import * as React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={\`border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 \${className}\`}
      {...props}
    />
  );
});

Input.displayName = "Input";
