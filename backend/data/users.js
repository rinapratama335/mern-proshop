import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin123@example.com",
    password: bcrypt.hashSync("admin123", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("john123", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("jane123", 10),
  },
];

export default users;
