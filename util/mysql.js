const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'app',
});
// 从连接池中获取数据库连接
exports.db = async (sql, arr) => {
    const connection = await pool.getConnection();
    const [data] = await connection.execute(sql, arr);
    connection.release();
    return data;
};

exports.insert = async (sql, arr) => {
    const connection = await pool.getConnection();
    const [data] = await connection.execute(sql, arr);
    connection.release();
    return data;
};
exports.getUserInfo = async (sql, arr) => {
    const connection = await pool.getConnection();
    const [data] = await connection.execute(sql, arr);
    connection.release();
    return data;
};
exports.DeleteUserInfo = async (sql, arr) => {
    const connection = await pool.getConnection();
    const [data] = await connection.execute(sql, arr);
    connection.release();
    return data;
}
