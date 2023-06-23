import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  //Funcion para obtener los datos del LocalStorage
  const obtenerLS = () => {
    //Obtener los pacientes del LocalStorage
    const pacientesLS = localStorage.getItem("pacientes");
    //Si no hay pacientes, retornar un array vacio
    if (!pacientesLS) return [];
    //Si hay pacientes, retornar los pacientes del LocalStorage
    return JSON.parse(pacientesLS);
  };

  //Inicializar los State's con un array vacio
  const [pacientes, setPacientes] = useState(() => obtenerLS());
  const [paciente, setPaciente] = useState({});

  //Guardar en el LocalStorage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  //Funcion para eliminar un paciente
  const eliminarPaciente = (id) => {
    //Filtrar el paciente a eliminar
    const pacientesFiltrados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    //Actualizar el State
    setPacientes(pacientesFiltrados);
  };

  return (
    <div className="container mx-auto mt-5">
      {/* Llamar al Componente Header */}
      <Header />
      <div className="mt-10 md:flex">
        {/* Llamar al componente Formulario con los State's*/}
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        {/* Llamar al componente ListadoPacientes con los State's*/}
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
