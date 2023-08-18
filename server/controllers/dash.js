module.exports = {
    getDash: async (req, res) => {
        console.log(req.user);
        try {
            const name = user.username;
            res.send(name);
        } catch (error) {
            res.send(error);
        }
    },
};
