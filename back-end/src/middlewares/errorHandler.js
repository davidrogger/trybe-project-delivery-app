// Apenas para não quebrar a aplicação inicialmente.
module.exports = (err, _req, res, _next) => {
  const { message } = err;
  res.status(500).json({ message });
};