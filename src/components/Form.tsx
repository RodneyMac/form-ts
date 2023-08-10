import { ChangeEvent, FormEvent, useState } from "react";
import { Dispatch, useUser } from "../context/context";

const Form = ({ handler }: { handler: Dispatch }) => {
  const { state } = useUser();
  const [dato, setDato] = useState({ nombre: "", edad: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDato({
      ...dato,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Name:", dato.nombre);
    console.log("Age:", dato.edad);
    handler("addUser");
    state.nombre = dato.nombre;
    state.edad = dato.edad;
  };

  return (
    <div>
      <div>Form</div>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "10px 0" }}>
          <input
            type="text"
            name="nombre"
            value={dato.nombre}
            onChange={handleChange}
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <input
            type="text"
            name="edad"
            value={dato.edad}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
      <div style={{ margin: "10px 0" }}>Name: {state.nombre} </div>
      <div style={{ margin: "10px 0" }}>Age: {state.edad} </div>
      <div style={{ margin: "10px 0" }}>
        <input type="text" defaultValue={state.nombre} />
      </div>
      <div style={{ margin: "10px 0" }}>
        <input type="text" defaultValue={state.edad} />
      </div>
    </div>
  );
};

export default Form;
