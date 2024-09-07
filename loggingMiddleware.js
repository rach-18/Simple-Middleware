function loggingMiddleware(req, res, next) {
    const timestamp = new Date();

    console.log(`This is a ${req.method} request`);
    console.log(`URL: ${req.url}`);
    console.log(`Timestamp: ${timestamp}`);

    next();
}

export default loggingMiddleware
