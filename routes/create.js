const get = (req, res) => {
    res.render('create');
}

const post = (req, res) => {
    res.render('home');
}

module.exports = {
    get: get,
    post: post
};