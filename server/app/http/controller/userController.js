const joi = require("joi");
require("joi-objectid")
const config = require("config")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const UserModel = require("../../models/UserModel")
const {
    loginValidator,
    registerValidator,
    todoValidator } = require("../validator/userValidator")
module.exports = class {

    async login(req, res) {
        const { error } = loginValidator(req.body)
        if (error) return res.status(403).send(error.message)

        const user = await UserModel.findOne({ user: req.body.user })
        if (!user) return res.status(404).send("No such user present in DB!")

        const result = await bcrypt.compare(req.body.password, user.password)
        if (!result) return res.status(403).send("Incorrect Credentials!")

        const data = {
            _id: user._id,
            role: "user"
        }

        const token = jwt.sign(data, config.get("userWebToken"))

        res.header("Access-Control-Expose-headers", "x-auth-token").header("x-auth-token", token).send(true)
    }

    async register(req, res) {

        const { error } = registerValidator(req.body)
        if (error) return res.status(403).send(error.message)

        let user = await UserModel.findOne({ user: req.body.user })
        if (user) return res.status(400).send("User Already exists with this username!")

        user = new UserModel(req.body)


        await user.save()

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password, salt)
        user.password = hash;

        const result = await user.save()

        const data = {
            _id: result._id,
            role: "user"
        }

        const token = jwt.sign(data, config.get("userWebToken"))

        res.header("Access-Control-Expose-headers", "x-auth-token").header("x-auth-token", token).send(true)
    }

    async getList(req, res) {
        const user = await UserModel.findById(req.user._id)
        if (!user) return res.status(404).send("Unknown Error! Unable to get the TODO list!")

        res.send(user.todo)
    }

    async addTodo(req, res) {
        const { error } = todoValidator(req.body)
        if(error) return res.status(400).send(error.message)

        const user = await UserModel.findById(req.user._id)
        if (!user) return res.status(404).send("Error! Unable to add object to DB!")

        user.todo.push(req.body)
        await user.save()

        res.send(user.todo.find(todo => todo.title===req.body.title))
    }

    async editTodo(req,res){
        const id=req.params.id

        const user = await UserModel.findById(req.user._id)
        if(!user) return res.status(404).send("")

        const check=user.todo.find(item => item._id==id)
        if(!check) return res.status(404).send("No such user present in DB!")

        switch (check.checked) {
            case true:
                check.checked = false
                break;
        
                case false:
                    check.checked = true
                    break;
        }
        const result=await user.save()
        res.send(result.todo)
    }

    async deleteTodo(req,res){
        const id=req.params.id

        const user=await UserModel.findById(req.user._id)
        if(!user) return res.status(404).send("No such user present in DB!")

        const todo=user.todo.find(item=> item._id==id).remove()

        await user.save()
        res.send(true)
    }
}