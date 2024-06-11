export const changeOverflowStyle = (state: boolean) => {
  if (state) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
