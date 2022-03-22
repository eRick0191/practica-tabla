import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';


function App() {
  const [precio, setPrecio] = useState([])
  const url ='http://scratchya.com.ar/react/datos.php'
  const verData = async ()=>{
    const repuesta = await fetch(url)
    const data = await repuesta.json()
    console.log(data)
    setPrecio(data)
  }
  useEffect( ()=>{
    verData()
  }, [])

  const columnas = [

    {
      name: 'Codigo',
      selector: row => row.codigo
    },
    {
      name: 'Descripcion',
      selector: row => row.descripcion
    },
    {
      name: ' Precio',
      selector: row => row.precio
    },
  ]


  return (
    <div className="App">
      <DataTable
      columns={columnas}
      data={precio}
      />
    </div>
  );
}

export default App;