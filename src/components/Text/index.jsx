import React from "react";

const sizeClasses = {
  txtDhyanaBold84Indigo900: "font-bold font-dhyana",
  txtDhyanaRegular12Indigo900: "font-dhyana font-normal",
  txtDhyanaRegular18: "font-dhyana font-normal",
  txtDhyanaRegular19: "font-dhyana font-normal",
  txtDhyanaRegular27: "font-dhyana font-normal",
  txtDhyanaRegular25: "font-dhyana font-normal",
  txtDhyanaRegular37: "font-dhyana font-normal",
  txtDhyanaBold18Lightblue800: "font-bold font-dhyana",
  txtDhyanaRegular20Gray10003: "font-dhyana font-normal",
  txtDhyanaBold18: "font-bold font-dhyana",
  txtDhyanaBold15: "font-bold font-dhyana",
  txtDhyanaBold84Lightblue800: "font-bold font-dhyana",
  txtDhyanaRegular12: "font-dhyana font-normal",
  txtDhyanaRegular35: "font-dhyana font-normal",
  txtDhyanaBold84: "font-bold font-dhyana",
  txtDhyanaRegular30: "font-dhyana font-normal",
  txtDhyanaRegular20: "font-dhyana font-normal",
  txtDhyanaBold18Gray100: "font-bold font-dhyana",
  txtDhyanaRegular51: "font-dhyana font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
