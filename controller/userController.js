const userModel = require('../Model/userMidel')
exports.handleLogin = async (req, res) => {
    let { username, password } = req.query
    let data = await userModel.getUname(username)
    // console.log(data)
    const fil = data.filter(item => password === item.password)
    if (!username) return res.send({ msg: '用户名不能为空！' })
    if (data.length === 0) return res.send({ msg: '用户名不存在！' })
    if (fil.length === 0) return res.send({ msg: '密码错误' })
    res.send({ success: '登录成功' })
}
exports.handleInserUser = async (req, res) => {
    let { username, password } = req.query
    if (username === '' || password === '') return res.send({ msg: 'name为空!!!' })
    let data = await userModel.insertUser(username, password)
    if (data) return res.send({ msg: '添加成功' })
}
exports.handleGetUser = async (req, res) => {
    let data = await userModel.UserInfo()
    if (data) return res.json(data)
}
exports.handleDeleteUser = async (req, res) => {
    let { id } = req.query
    let data = await userModel.deleteUserInfo(id)
    console.log(data);
    if (data) return res.send({ msg: '删除成功' })
}