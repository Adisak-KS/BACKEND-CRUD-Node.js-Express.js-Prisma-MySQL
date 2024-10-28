import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const url = "http://localhost:5000/api/product/";
      const resp = await axios.get(url);

      console.log(resp.data);
      setData(resp.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>App</h1>
      {data.map((item, index) => {
        console.log(item);
        return <li key={index}>{item.name}</li>;
      })}
    </div>
  );
};

export default App;
