const { db, User } = require("../src/server/db/models");

const seed = async () => {
  await db.sync({ force: true });
  console.log("seeding");

  try {
    await User.create({
      firstName: "test",
      lastName: "test",
      email: "test",
      password: "test",
    });
  } catch (err) {
    console.log(err);
  }

  console.log("closing db connection");
  await db.close();
  console.log("db closed");
};

if (module === require.main) {
  seed();
}
