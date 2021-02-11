import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "jdoe@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Jane Doe",
    email: "janedoe@example.com",
    password: bcrypt.hashSync("password", 10),
  },
];

export default users;
