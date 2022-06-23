const loginService = require("../services/login.service");

class LoginController {
    async create(req, res) {
        //try{
        const {username, email, password} = req.body;
        
    const { status, data, message } = await loginService.create(
        username,
        email,
        password);

        res.send({status});
        res.json({ message, data });

        // }catch (e) {
        //     console.log(e);
        // }  
    }
}

module.exports = LoginController;