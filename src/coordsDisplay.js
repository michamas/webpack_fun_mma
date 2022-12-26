const wrapper = document.querySelector(".wrapper");

// metoda zwykla, ale z dopiskiem export pozwala na korzystanie
// w innym skrypcie
export const displayMouseCoords = ({ x, y }) => {
  wrapper.textContent = `X: ${x}, Y: ${y}`;
};
