const data = require('../../dbhotels.js');

module.exports = async (req, res) => {
    const id = parseInt(req.url.split('/')[2]);
    const success = await data.deleteUser(id);

    if (success) {
        res.writeHead(200);
        res.end(JSON.stringify({message: 'User deleted successfully'}));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({message: 'User not found'}));
    }
};