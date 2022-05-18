const People = ({
  people,
  newPersonName,
  setNewPersonName,
  deletePerson,
  addPerson,
  setHasTripStarted,
  setPaymentForEverybodyPerson,
  setPaymentFromSinglePerson,
  setPaymentToSinglePerson,
}) => {
  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          {person.personName}
          <button onClick={() => deletePerson(person.id)}>Delete Person</button>
        </div>
      ))}

      <input
        value={newPersonName}
        onChange={(event) => {
          setNewPersonName(event.target.value);
        }}
      />
      <button onClick={() => addPerson(newPersonName)}>Add Person</button>
      <hr />
      <button
        onClick={() => {
          setHasTripStarted(true);
          setPaymentForEverybodyPerson(people[0].id);
          setPaymentFromSinglePerson(people[0].id);
          setPaymentToSinglePerson(people[0].id);
        }}
      >
        Start Trip
      </button>
    </div>
  );
};

export default People;
