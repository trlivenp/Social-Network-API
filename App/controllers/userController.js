const User = require('../models/User');

exports.retrieveUserFriends = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate('friends', 'username');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ friends: user.friends });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
