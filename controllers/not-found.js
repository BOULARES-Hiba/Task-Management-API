 const notFound =(err, req, res, next) => {
   res.status(500).send( "Route does not exist ");
};

export default notFound;