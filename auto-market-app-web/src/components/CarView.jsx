import React from 'react';

const CarPublication = () => {
  return (
    <div className="w-[500px] h-[510px]  mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Publicación de Coche</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <img src="https://via.placeholder.com/400x300" alt="Coche" className="w-full h-auto rounded-md" />
          <div className="col-span-2">
              <label className="block text-gray-700 font-bold mb-2 mt-4">Marca</label>
              <p>Toyota</p>
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 font-bold mb-2">Modelo</label>
              <p>Corolla</p>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Año</label>
              <p>2020</p>
            </div>
        </div>
        <div className="overflow-auto">
          <div className="grid grid-cols-2 gap-4 mb-4">

            <div>
              <label className="block text-gray-700 font-bold mb-2">Kilometraje</label>
              <p>30,000</p>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Precio</label>
              <p>$20,000</p>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Tipo de Combustible</label>
              <p>Gasolina</p>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Transmisión</label>
              <p>Automático</p>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Cilindrada del Motor</label>
              <p>1.8L</p>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Condición</label>
              <p>Excelente</p>
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 font-bold mb-2">Descripción</label>
              <p>Este es un coche genérico para propósitos de demostración.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPublication;
