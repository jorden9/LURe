import bcrypt from "bcryptjs"
const users = [
    {
        name: "nik",
        email:"nikhileshwwf@gmail.com",
        password:bcrypt.hashSync('1234', 10),
        isAdmin: true,
    },
    {
        name: "hello",
        email:" hello@123gmail.com",
        password:bcrypt.hashSync('1234', 10),
        isAdmin: true,
    },
    {
        name: "hi",
        email:" hi@123gmail.com",
        password:bcrypt.hashSync('1234', 10),
        isAdmin: false,
    },
    {
        name: "yooo",
        email:" yooo@123gmail.com",
        password:bcrypt.hashSync('1234', 10),
        isAdmin: false,
    },
    {
        name: "heyy",
        email:" heyy@123gmail.com",
        password:bcrypt.hashSync('1234', 10),
        isAdmin: false,
    }
]
export default users;
