/* eslint-disable react/prop-types */ // TODO:

// Funcion para mostrar el paciente
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  // Funcion para cargar los datos del paciente en el formulario
  const { nombre, propietario, email, telefono, fecha, sintomas, id } =
    paciente;

  // Funcion para eliminar un paciente
  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  // Funcion para formatear la fecha en el formato deseado (dd-mm-aaaa)
  const formatearFecha = (fecha) => {
    const [anio, mes, dia] = fecha.split('-');
  
    const formatearFecha = new Date(anio, mes - 1, dia);
    const diaFormateado = formatearFecha.getDate();
    const mesFormateado = formatearFecha.getMonth() + 1;
    const anioFormateado = formatearFecha.getFullYear();
  
    const fechaFormateada = `${diaFormateado < 10 ? '0' + diaFormateado : diaFormateado}-${
      mesFormateado < 10 ? '0' + mesFormateado : mesFormateado
    }-${anioFormateado}`;
  
    return fechaFormateada;
  };
  


  return (
    <div className="bg-white shadow-md rounded-lg mx-5 ml-3 py-1 px-5 mb-5">
      <p className="font-bold text-lg mt-2  mb-2">
        Nombre: {""}
        <span className="text-gray-700 font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold text-lg mt-2  mb-2">
        Propietario: {""}
        <span className="text-gray-700 font-normal normal-case">
          {propietario}
        </span>
      </p>
      <p className="font-bold text-lg mt-2  mb-2">
        Correo electrónico: {""}
        <span className="text-gray-700 font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold text-lg mt-2  mb-2">
        Teléfono de contacto: {""}
        <span className="text-gray-700 font-normal normal-case">
          {telefono}
        </span>
      </p>
      <p className="font-bold text-lg mt-2  mb-2">
        Fecha de alta: {""}
        <span className="text-gray-700 font-normal normal-case">{formatearFecha(fecha)}</span>
      </p>
      <p className="font-bold text-lg mt-2  mb-2">
        Sintomas: {""}
        <span className="text-gray-700 font-normal normal-case">
          {sintomas}
        </span>
      </p>
      <div className="mt-2  mb-2">
        {/* Editar los datos de un Paciente, cargando en el formulario */}
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mr-5 mt-2 mb-2"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        {/* Eliminar un Paciente */}
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mt-2 mb-2"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
