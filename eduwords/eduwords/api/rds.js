const { Pool } = require('pg');

// RDS 연결 설정
const dbConfig = {
  host: 'eduwords-eng.cb20gsk0grwq.us-east-1.rds.amazonaws.com', // RDS 호스트 주소
  port: 5432, // RDS 포트
  user: 'postgres', // RDS 사용자명
  password: 'postgres', // RDS 비밀번호
  database: 'eduwords' // RDS 데이터베이스 이름
};

const pool = new Pool(dbConfig);

module.exports = async (req, res) => {
  try {
    // RDS 연결
    const client = await pool.connect();
    
    // 여러 테이블에서 데이터 가져오기
    const memberResult = await client.query('SELECT * FROM tb_member');
    const questionResult = await client.query('SELECT * FROM tb_question');
    const embedding = await client.query('SELECT * FROM tb_embedding');
    const test = await client.query('SELECT * FROM tb_test');
    const vector = await client.query('SELECT * FROM tb_vector');
    const voca = await client.query('SELECT * FROM tb_voca');
    const workbook = await client.query('SELECT * FROM tb_workbook');
    // 필요에 따라 더 많은 테이블에서 데이터를 가져올 수 있습니다.
    
    // 연결 종료
    client.release();

    // 결과 반환
    res.status(200).json({
      members: memberResult.rows,
      questions: questionResult.rows,
      embeddings: embedding.rows,
      tests: test.rows,
      vectors: vector.rows,
      vocas: voca.rows,
      workbooks: workbook.rows,
      // 필요에 따라 더 많은 테이블의 데이터를 추가할 수 있습니다.
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
