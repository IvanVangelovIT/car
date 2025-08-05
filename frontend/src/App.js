import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Loading....aa");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
      })
      .catch((err) => {
        console.error(err);
        setStatus("Backend not responding 😢");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Електронна винетка</h1>
      <p>Статус на сървъра: {status}</p>
    </div>
  );
}

export default App;
