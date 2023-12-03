/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Vehiculo = ({ vehiculo, setVehiculo, eliminarVehiculo }) => {
  const { patente, marca, modelo, propietario, mail, fechaAlta, observacion, id } =
    vehiculo;

  const handleEliminar = ()=>{
    const respuesta = confirm("Deseas eliminar este vehiculo?")
    if(respuesta){
      eliminarVehiculo(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Patente: {""}
        <span className="font-normal normal-case">{patente}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Marca: {""}
        <span className="font-normal normal-case">{marca}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Modelo: {""}
        <span className="font-normal normal-case">{modelo}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        E-Mail: {""}
        <span className="font-normal normal-case">{mail}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: {""}
        <span className="font-normal normal-case">{fechaAlta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Estado: {""}
        <span className="font-normal normal-case">{observacion}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setVehiculo(vehiculo)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
       >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Vehiculo;
