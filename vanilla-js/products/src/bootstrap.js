import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<li>${name}</li>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector('#dev-products');

  // Assuming the container html doesn't have the #dev-products id in it
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

export { mount };
