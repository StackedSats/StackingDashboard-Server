export default (func) => {
  try {
    func();
  } catch (e) {
    console.error(e);
  }
};
