const { Users } = require("../../db");

const searchUserByEmailController = async (email) => {
  const allUsers = await Users.findAll();

  if (email) {
    const userEmail = allUsers.filter((user) =>
      user.email.toLowerCase().includes(email.toLowerCase())
    );
    if (!userEmail.length)
      throw new Error(`Couldn't find user with email: ${email}`);
    return userEmail;
  }
};

module.exports = searchUserByEmailController;
