/** @type {import('@ladle/react').UserConfig} */
export default {
  addons: {
    a11y: {
      enabled: true,
    },
  },
  storyOrder: () => [
    "button--primary-button",
    "button--secondary-button",
    "button--outlined-button",
    "button--text-link",
    "form--input",
    "form--select",
    "form--textarea",
    "form--radio",
    "form--checkbox",
    "pagination--pagination",
  ],
};
