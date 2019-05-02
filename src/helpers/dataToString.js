export default data => {
  return Array.isArray(data) ? data.join(", ") : data;
};
