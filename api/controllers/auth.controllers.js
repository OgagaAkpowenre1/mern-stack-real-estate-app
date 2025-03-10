import bycrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    console.log(username, password, email);

    //HASH THE PASSWORD
    const hashedPassword = await bycrypt.hash(password, 10);

    console.log(hashedPassword);

    //SAVE THE NEW USER TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser)
    res.status(201).json({message: "User created successfully!"});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "An error has occurred"});
  }
};

export const login = async (req, res) => {
  try {
    const {username, password} = req.body

    //CHECK IF USER EXISTS
    const user = await prisma.user.findUnique({
        where: {username : username}
    })

    if (!user) return res.status(401).json({message: "Invalid credentials!"})

    //CHECK IS PASSWORD IS CORRECT

    const isPasswordValid = await bycrypt.compare(password, user.password)

    if (!isPasswordValid) return res.status(401).json({message: "Invalid credentials!"})

    //GENERATE COOKIE TOKEN AND SEND TO USER
    const age = 1000 * 60 * 60 * 24 * 7

    res.cookie("test2", "myValue2", {
        httpOnly:true,
        // secure: true
        maxAge: age
    }).status(200).json({message: "Login successful"})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Failed to login"})
  }
};

export const logout = async (req, res) => {
  res.json("logout endpoint");
};
