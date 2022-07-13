import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { useState } from "react";



export default function CrudApp() {
  
  const save = (db) => {
    localStorage.setItem("users", JSON.stringify(db));
  };

  var initialDb = JSON.parse(localStorage.getItem("users"));

  if (!initialDb || initialDb.lenght < 1) {
    initialDb = [
      {
        id: 1,
        name: "kanna",
        image:
          "https://i.pinimg.com/236x/d9/e5/e1/d9e5e157f697ea6801683a9bd26e1598.jpg",
      },

      {
        id: 2,
        name: "kobayashi",
        image:
          "https://i.pinimg.com/236x/c7/40/39/c7403991a04d73835f685c19688ce5de.jpg",
      },

      {
        id: 3,
        name: "elma",
        image:
          "https://i.pinimg.com/236x/7a/4f/99/7a4f99ac5d03b60ebb20d806264ac79e.jpg",
      },
    ];

    save(initialDb);
  }

  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
    save([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((item) => (item.id === data.id ? data : item));
    setDb(newData);
    save(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("esta seguro?");

    if (isDelete) {
      let newData = db.filter((item) => item.id !== id);
      setDb(newData);
      save(newData);
    } else {
      return;
    }
  };

  

  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
}
