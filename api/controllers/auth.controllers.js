export const register = (req, res) => {
    const {username, password, email} = req.body
    console.log(username, password, email)
    res.json("hi")
}

export const login = (req, res) => {
    res.json("login endpoint")
}

export const logout = (req, res) => {
    res.json("logout endpoint")
}