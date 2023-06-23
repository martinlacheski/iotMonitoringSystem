/* eslint-disable react/prop-types */ // TODO:

import Paciente from "./Paciente";

// Funcion para mostrar el listado de pacientes
const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
      {/* Si el listado tiene algun paciente */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado
          </h2>
          <p className="text-lg mt-5 text-center mb-5">
            Administrar {""}
            <span className="text-indigo-600 font-bold">mascotas</span>
          </p>
          {/* Recorrer mediante el MAP e iterar por los atributos, y pasar el state setPaciente */}
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          {/* Si el listado no tiene pacientes */}
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-5">
            Comienza agregando {""}
            <span className="text-indigo-600 font-bold">en el formulario</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
