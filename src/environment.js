const production = !(
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
);

export default {
  production,
};
