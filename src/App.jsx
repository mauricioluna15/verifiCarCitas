import { useState, useEffect } from "react";
import Header from "./component/Header";
import Formulario from "./component/Formulario";
import ListadoVehiculos from "./component/ListadoVehiculos";

const App = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [vehiculo, setVehiculo] = useState({});

  const eliminarVehiculo = (id)=>{
    const vehiculosActualizados = vehiculos.filter(vehiculo=>vehiculo.id !== id)
    setVehiculos(vehiculosActualizados)
  }

  useEffect(()=>{
    const obtenerVehiculosLS = ()=>{
      const vehiculosLS = JSON.parse(localStorage.getItem('vehiculos'))??[];
      setVehiculos(vehiculosLS);
    }
    obtenerVehiculosLS()
  },[])

  useEffect(()=>{
   localStorage.setItem('vehiculos', JSON.stringify(vehiculos))
  },[vehiculos])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex m-5">
        <Formulario vehiculos={vehiculos} setVehiculos={setVehiculos} vehiculo={vehiculo} setVehiculo={setVehiculo}/>
        <ListadoVehiculos vehiculos={vehiculos} setVehiculo={setVehiculo} eliminarVehiculo={eliminarVehiculo}/>
      </div>
    </div>
  );
};

export default App;
