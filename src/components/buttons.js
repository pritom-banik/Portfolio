/** Shared button styles, used on <a>, <Link> and <button> elements alike. */

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium cursor-pointer transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const SIZES = {
  md: "px-4 py-2 text-sm",
  sm: "px-3 py-1.5 text-xs",
};

const VARIANTS = {
  primary: "bg-white text-black hover:bg-gray-200",
  secondary: "border border-gray-600 text-white hover:bg-gray-800 hover:border-gray-400",
};

export function buttonClass(variant = "primary", size = "md") {
  return `${BASE} ${SIZES[size]} ${VARIANTS[variant]}`;
}
