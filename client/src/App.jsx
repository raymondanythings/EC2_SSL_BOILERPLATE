import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { register, handleSubmit } = useForm();

  const load = () => {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  const onValid = (data) => {
    const dd = JSON.stringify(data);
    fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => load());
  };

  useEffect(() => {
    load();
  }, []);

  return loading ? (
    "Loading..."
  ) : (
    <>
      {data.map((m) => (
        <div key={m.id}>
          <p>{m.title}</p>
          <p>{m.description}</p>
          <p>{m.userName}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("title")} type="text" />
        <input {...register("description")} type="text" />
        <input {...register("userName")} type="text" />
        <input type="submit" value="ok" />
      </form>
    </>
  );
}

export default App;
