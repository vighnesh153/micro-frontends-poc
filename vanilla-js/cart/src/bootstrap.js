import faker from "faker";

const mount = (el) => {
  el.innerHTML = `<div>You have ${faker.random.number()} items in your cart.</div>`;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector('#dev-cart');

  if (el) {
    mount(el);
  }
}

export { mount };
