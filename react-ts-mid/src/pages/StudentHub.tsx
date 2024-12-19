import React, { useEffect, useState } from 'react';

interface Student {
  _id: string;
  account: string;
  seat_number: number;
  name: string;
  department: string;
  grade: string;
  class: string;
  email: string;
  absences: number;
}

const StudentHub: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [formData, setFormData] = useState({ account: '', name: '', absences: 0 });

  // 讀取所有學生資料
  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  // 處理表單變更
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 新增學生
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/v1/user/findAll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => window.location.reload());
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className="sidebar">
        <h2>StudentHub</h2>
        <button>所有學生</button>
        <button>新增學生</button>
      </div>
      <div className="content">
        <h1>學生列表</h1>
        {students.map((student) => (
          <div key={student._id} className="student-card">
            <p>帳號: {student.account}</p>
            <p>姓名: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>缺席次數: {student.absences}</p>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input type="text" name="account" placeholder="帳號" onChange={handleChange} />
          <input type="text" name="name" placeholder="姓名" onChange={handleChange} />
          <input type="number" name="absences" placeholder="缺席次數" onChange={handleChange} />
          <button type="submit">新增學生</button>
        </form>
      </div>
    </div>
  );
};

export default StudentHub;