export default async function onError(
  error,
  req,
  res,
  next
) {
  res.status(500).end(error.toString());

  next();
}