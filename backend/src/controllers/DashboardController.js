module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const spots = await spots.find({ user: user_id });

    return res.json(spots);
  }
};
