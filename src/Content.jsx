import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Content() {
  const [cargos, setCargos] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    axios.get(`http://localhost:8080/cargo?page=${page}&size=${size}`)
        .then(response => {
          setCargos(response.data.content);
        }).catch(error => {
          console.error('Error', error);
        });
  }, [page, size]);

  return (
    <div>
      {cargos.map(cargo => (
        <div key={cargo.id}>
          <p>{cargo.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Content;