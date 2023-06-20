const { db, insert, getUserInfo, DeleteUserInfo } = require('../util/mysql');

exports.getUname = async (username) => {
    let data = await db('SELECT * FROM user WHERE name = ?;', [username]);
    return data;
};
exports.insertUser = async (name, password) => {
    const values = [name, password];
    // 创建 SQL 插入语句
    const data = await insert("INSERT INTO user (name, password) VALUES (?, ?);", values)
    return data
}
exports.UserInfo = async () => {
    // 创建 SQL 插入语句
    const data = await getUserInfo("SELECT * FROM user");
    return data
}
exports.deleteUserInfo = async (id) => {
    // 创建 SQL 插入语句
    const data = await DeleteUserInfo('DELETE FROM user WHERE id = ?', [id])
    return data
}
