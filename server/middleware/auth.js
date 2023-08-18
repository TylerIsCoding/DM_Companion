module.exports = {
    ensureAuth: function (req, res, next) {
        console.log(req);
        if (req.isAuthenticated()) {
            return next();
        } else {
            console.log(req.isAuthenticated());
        }
    },
};
