import React, { useState } from 'react';

function PhotoUploadForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    description: '',
    tags: '',
    photo: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.username) {
      formErrors.username = 'Ник не может быть пустым';
      isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      formErrors.password = 'Пароль должен содержать минимум 6 символов';
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      formErrors.email = 'Введите правильный электронный адрес';
      isValid = false;
    }

    if (!formData.photo) {
      formErrors.photo = 'Фотография обязательна';
      isValid = false;
    }

    if (!formData.description) {
      formErrors.description = 'Описание обязательно';
      isValid = false;
    }

    if (formData.tags && formData.tags.split(',').length > 5) {
      formErrors.tags = 'Максимум 5 тегов';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Форма отправлена:', formData);
      alert('Форма успешно отправлена!');
      setFormData({
        username: '',
        password: '',
        email: '',
        description: '',
        tags: '',
        photo: null,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ник: <input type="text" name="username" value={formData.username} onChange={handleChange} /></label>
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Пароль: <input type="password" name="password" value={formData.password} onChange={handleChange} /></label>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label>
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Описание: <textarea name="description" value={formData.description} onChange={handleChange}></textarea></label>
        {errors.description && <span>{errors.description}</span>}
      </div>
      <div>
        <label>Теги: <input type="text" name="tags" value={formData.tags} onChange={handleChange} /></label>
        {errors.tags && <span>{errors.tags}</span>}
      </div>
      <div>
        <label>Фотография: <input type="file" name="photo" onChange={handleChange} /></label>
        {errors.photo && <span>{errors.photo}</span>}
      </div>
      <div>
        <button type="submit">Загрузить</button>
      </div>
    </form>
  );
}

export default PhotoUploadForm;
