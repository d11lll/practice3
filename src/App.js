import { useState, useEffect } from "react";

function UserCard() {
  const [name, setName] = useState("Иван");
  const [surname, setSurname] = useState("Иванов");

  const defaultName = "Иван";
  const defaultSurname = "Иванов";

  useEffect(() => {
    console.log("Данные обновлены:", { name, surname });
  }, [name, surname]);

  const handleReset = () => {
    setName(defaultName);
    setSurname(defaultSurname);
  };

  return (
    <div>
      <h2>Карточка пользователя</h2>

      <div>
        <label>Имя:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>Фамилия:</label>
        <input value={surname} onChange={(e) => setSurname(e.target.value)} />
      </div>

      <button onClick={handleReset}>Сбросить</button>

      <div>
        <p>
          Текущие данные: {name} {surname}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
