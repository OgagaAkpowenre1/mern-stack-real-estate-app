import express from "express"

const router = express.Router()

router.get("/", (res, req) => {
    console.log("router works")
})

export default router; 