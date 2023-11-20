const { Users } = require("../../db");

const searchUserByNameController = async (name) => {
  const allUsers = await Users.findAll();

  if (name) {
    const userName = allUsers.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    if (!userName.length)
      throw new Error(`Couldn't find user with name: ${name}`);
    return userName;
  }
};

module.exports = searchUserByNameController;