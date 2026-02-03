import mysql from 'mysql2/promise';

//db연결정보
const pool = mysql.createPool({
  host:process.env.DB_HOST || 'svc.sel3.cloudtype.app',
  port:process.env.DB_PORT || 32454,
  user: process.env.DB_USER || 'root',
  password:process.env.DB_PASSWORD || '1234',
  database:'kdt',
  waitForConnections:true, //연결 개수가 풀일 때 기다리게해야...
  connectionLimit:10, //db연결 최대 수
  queueLimit:0, //대기 요청수 '0'이면 무제한
});


export const db=pool;
