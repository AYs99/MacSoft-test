import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]" };
const variants = {
  outline: {
    light_blue_800_indigo_900:
      "border border-solid light_blue_800_indigo_900_border text-indigo-900",
  },
  fill: { indigo_900: "bg-indigo-900 text-white-A700" },
  gradient: { light_blue_800_indigo_900: "bg-gradient  text-gray-100" },
};
const sizes = { xs: "p-1", sm: "p-[9px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill", "gradient"]),
  color: PropTypes.oneOf(["light_blue_800_indigo_900", "indigo_900"]),
};

export { Button };
