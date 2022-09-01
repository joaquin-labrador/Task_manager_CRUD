const errorHandler = (req, res, next) => {
  res.status(404).render("404.hbs");
};

export default errorHandler;
