/* eslint-disable react/prop-types */
import Vehiculo from "./Vehiculo";

const ListadoVehiculos = ({ vehiculos, setVehiculo, eliminarVehiculo }) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
      {vehiculos && vehiculos.length ? (
        <>
          {" "}
          <h2 className="font-black text-3xl text-center">Listado Vehiculos</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Adminstra tus {""}
            <span className="text-indigo-600 font-bold">Vehiculos y citas</span>
          </p>
          {vehiculos.map((vehiculo) => (
            <Vehiculo
              key={vehiculo.id}
              vehiculo={vehiculo}
              setVehiculo={setVehiculo}
              eliminarVehiculo={eliminarVehiculo}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Vehiculos</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agrgando vehiculos y{""}
            <span className="text-indigo-600 font-bold">
              {" "}
              apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoVehiculos;
