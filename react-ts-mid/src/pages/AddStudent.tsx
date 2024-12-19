import React, { useState } from 'react';

const AddStudent: React.FC = () => {
  const [formData, setFormData] = useState({
    account: '',
    name: '',
    seat_number: '',
    department: '',
    grade: '',
    class: '',
    email: '',
    absences: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/v1/user/findAll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    alert('學生新增成功');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="account" placeholder="帳號" onChange={(e) => setFormData({ ...formData, account: e.target.value })} />
      <input name="name" placeholder="姓名" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <button type="submit">新增學生</button>
    </form>
  );
};

export default AddStudent;