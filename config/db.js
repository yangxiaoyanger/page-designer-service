//加载mysql模块
var mysql = require('mysql');
//创建连接
var pool = mysql.createPool({
host     : 'localhost',
user     : 'root',
password : '',
port: '3306',
database : 'vuepage'
});

function query(sql, callback) {
  pool.getConnection(function(err,connection){
    connection.query(sql, function (err,rows) {
      console.log(err, callback, rows, 123)
        callback(err,rows);
        connection.release();
    });
  });
}

exports.query = query;

