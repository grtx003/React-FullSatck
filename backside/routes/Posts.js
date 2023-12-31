const express = require("express")
const router = express.Router()
const { Posts } = require("../models")

router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts)
})

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id
    const postById = await Posts.findByPk(id)
    res.json(postById)
})

router.post("/", async (req, res) => {
    const post = req.body
    await Posts.create(post)
    res.json(post)
})

module.exports = router