export default data => {
  return Array.isArray(data) ? data.join(", ") : String(data);
};
