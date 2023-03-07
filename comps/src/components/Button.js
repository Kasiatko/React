import React from "react";
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {

    const classes = className(rest.className,'flex items-center px-3 py-1.5 border', {
      'border-blue-500': primary,
      'border-gray-900': secondary,
      'border-green-500': success,
      'border-yellow-400': warning,
      'border-red-500': danger,
      'rounded-full': rounded,
      'bg-white text-blue-500': outline && primary,
      'bg-white text-gray-900': outline && secondary,
      'bg-white text-green-500': outline && success,
      'bg-white text-yellow-400': outline && warning,
      'bg-white text-red-500': outline && danger,
      'bg-blue-500 text-white': !!!outline && primary,
      'bg-gray-900 text-white': !!!outline && secondary,
      'bg-green-500 text-white': !!!outline && success,
      'bg-yellow-400 text-white': !!!outline && warning,
      'bg-red-500 text-white': !!!outline && danger,
    });



  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary,success, warning, danger can be true"
      );
    }
  },
};

export default Button;
