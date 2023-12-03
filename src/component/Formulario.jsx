/* eslint-disable no-import-assign */

import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ vehiculos, setVehiculos, vehiculo, setVehiculo }) => {
  const [patente, setPatente] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [propietario, setPropietario] = useState("");
  const [mail, setMail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [observacion, setObservacion] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(vehiculo).length > 0) {
      setPatente(vehiculo.patente);
      setMarca(vehiculo.marca);
      setModelo(vehiculo.modelo);
      setPropietario(vehiculo.propietario);
      setMail(vehiculo.mail);
      setFechaAlta(vehiculo.fechaAlta);
      setObservacion(vehiculo.observacion);
    }
  }, [vehiculo]);

  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        patente,
        marca,
        modelo,
        propietario,
        mail,
        fechaAlta,
        observacion,
      ].includes("")
    ) {
      setError(true);
    } else {
      setError(false);

      const objVehiculo = {
        patente,
        marca,
        modelo,
        propietario,
        mail,
        fechaAlta,
        observacion,
      };

      if (vehiculo.id) {
        objVehiculo.id = vehiculo.id;
        const vehiculoActualizado = vehiculos.map((veihculoState) =>
          veihculoState.id === vehiculo.id ? objVehiculo : veihculoState
        );
        setVehiculos(vehiculoActualizado)
        setVehiculo({})
      } else {
        objVehiculo.id = generarId();
        setVehiculos([...vehiculos, objVehiculo]);
      }

      //reinicio form
      setFechaAlta("");
      setMail("");
      setMarca("");
      setModelo("");
      setObservacion("");
      setPatente("");
      setPropietario("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Vehiculos</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade vehiculo y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="vehiculo"
            className="block text-gray-700 uppercase font-bold"
          >
            Patente vehiculo
          </label>
          <input
            id="vehiculo"
            type="text"
            placeholder="Patente de vehiculo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patente}
            onChange={(e) => setPatente(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="marca"
            className="block text-gray-700 uppercase font-bold"
          >
            Marca vehiculo
          </label>
          <input
            id="marca"
            type="text"
            placeholder="Patente de vehiculo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="modelo"
            className="block text-gray-700 uppercase font-bold"
          >
            Modelo vehiculo
          </label>
          <input
            id="modelo"
            type="text"
            placeholder="Patente de vehiculo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="E-mail contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="estado"
            className="block text-gray-700 uppercase font-bold"
          >
            Estado de recepcion
          </label>
          <textarea
            name=""
            id="estado"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={observacion}
            onChange={(e) => setObservacion(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={vehiculo.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
