// app/controllers/friendshipController.js
const User = require('../models/User');
const FriendshipRequest = require('../models/FriendshipRequest');

exports.updateFriendRequest = async (req, res) => {
  const { requestId, status } = req.params;

  try {
    const request = await FriendshipRequest.findById(requestId);

    if (!request) {
      return res.status(404).json({ message: 'Friend request not found' });
    }

    const sender = await User.findById(request.sender);
    const receiver = await User.findById(request.receiver);

    if (!sender || !receiver) {
      return res.status(404).json({ message: 'Sender or receiver not found' });
    }

    if (status === 'accept') {
      // Accept the friend request
      sender.friends.push(receiver._id);
      receiver.friends.push(sender._id);

      // Update the friend request status to 'accepted'
      request.status = 'accepted';
    } else if (status === 'reject') {
      // Reject the friend request
      await request.remove();
    } else {
      return res.status(400).json({ message: 'Invalid status' });
    }

    // Save the changes
    await Promise.all([sender.save(), receiver.save(), request.save()]);

    res.status(200).json({ message: 'Friend request updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
