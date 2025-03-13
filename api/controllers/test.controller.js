import jwt from "jsonwebtoken"

export const shouldBeLoggedIn = async (req, res) => {
    try {
        console.log(req.userId);
        
        res.status(200).json({message: "You are authenticated"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server error while authenticating"})
    }
}

export const shouldBeAdmin = async (req, res) => {
    try {
        console.log("entered")
        const token = req.cookies.token

        if(!token) return res.status(401).json({message: "Not authenticated"})

        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
            if (err) return res.status(403).json({message: "Invalid token"})

            if(!payload.isAdmin) return res.status(403).json({message: "Not authorized"})

            
        })

        res.status(200).json({message: "You are authenticated"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server error while authenticating"})
    }
}