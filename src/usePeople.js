import { useCallback, useState } from "react";

const usePeople = () => {
  const [people, setPeople] = useState([]);
  const [newPersonName, setNewPersonName] = useState("");

  const deletePerson = useCallback(
    (id) => setPeople(people.filter((person) => person.id !== id)),
    [people]
  );

  const addPerson = useCallback(
    (personName) => {
      setPeople([...people, { id: Date.now(), personName }]);
      setNewPersonName("");
    },
    [people]
  );

  return { people, newPersonName, setNewPersonName, deletePerson, addPerson };
};

export default usePeople;
