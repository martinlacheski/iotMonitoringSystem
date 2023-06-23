/* eslint-disable react/prop-types */ // TODO:

import { useState, useEffect } from "react";
import Error from "./error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  //Inicializar las variables
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  //Inicializar una variable de error
  const [error, setError] = useState(false);

  useEffect(() => {
    //Si el paciente existe, cargarlo en el formulario
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setTelefono(paciente.telefono);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  //Funcion para generar un ID unico
  const generarID = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  //setNombre('Hook') //Esto no se hace, se hace con un evento

  //Funcion para enviar el formulario
  const handleSubmit = (e) => {
    //Evitar que se envie el formulario
    e.preventDefault();

    //Validar el formulario
    if ([nombre, propietario, email, telefono, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    //Crear el objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      telefono,
      fecha,
      sintomas,
      id: generarID(),
    };

    //Editar o crear el Paciente
    if (paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      //Reiniciar el state
      setPaciente({});

    } else {
      // Nuevo registro
      objetoPaciente.id = generarID();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar el formulario

    setNombre('');
    setPropietario('');
    setEmail('');
    setTelefono('');
    setFecha('');
    setSintomas('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Formulario
      </h2>
      <p className="text-lg mt-5 text-center mb-5">
        Añadir mascotas y {""}
        <span className="text-indigo-600 font-bold">administrarlos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-1 px-5 mb-10"
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div className="mt-5 mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray font-bold"
          >
            Mascota:
          </label>
          <input
            id="mascota"
            type="text"
            className=" border-2 w-full p-2 mt-2 text-gray-700 rounded-md leading-tight 
            focus:outline-none focus:shadow-outline"
            placeholder="Ingrese el nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} //Asi se declara en un evento
          ></input>
        </div>
        <div className="mt-5 mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray font-bold"
          >
            Propietario:
          </label>
          <input
            id="propietario"
            type="text"
            className=" border-2 w-full p-2 mt-2 text-gray-700 rounded-md leading-tight 
            focus:outline-none focus:shadow-outline"
            placeholder="Ingrese el nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          ></input>
        </div>
        <div className="mt-5 mb-5">
          <label
            htmlFor="email"
            className="block text-gray font-bold"
          >
            Correo electrónico:
          </label>
          <input
            id="email"
            type="text"
            className=" border-2 w-full p-2 mt-2 text-gray-700 rounded-md leading-tight 
            focus:outline-none focus:shadow-outline"
            placeholder="Ingrese el correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mt-5 mb-5">
          <label
            htmlFor="telefono"
            className="block text-gray font-bold"
          >
            Teléfono de contacto:
          </label>
          <input
            id="telefono"
            type="text"
            className=" border-2 w-full p-2 mt-2 text-gray-700 rounded-md leading-tight 
            focus:outline-none focus:shadow-outline"
            placeholder="Ingrese el número de teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          ></input>
        </div>
        <div className="mt-5 mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray font-bold"
          >
            Fecha de alta:
          </label>
          <input
            id="fecha"
            type="date"
            className=" border-2 w-full p-2 mt-2 text-gray-700 rounded-md leading-tight 
            focus:outline-none focus:shadow-outline"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          ></input>
        </div>
        <div className="mt-5 mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray font-bold"
          >
            Sintomas:
          </label>
          <textarea
            id="sintomas"
            type="text"
            className=" border-2 w-full p-2 mt-2 text-gray-700 rounded-md leading-tight 
            focus:outline-none focus:shadow-outline"
            placeholder="Describa los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-2 text-white uppercase font-bold rounded-md
           hover:bg-indigo-700 transition-all mt-2 mb-5"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        ></input>
      </form>
    </div>
  );
};

export default Formulario;
