const getNameById = (id, people) =>
  people.find((person) => person.id === id).personName;

const Payment = ({
  paymentForEverybodyPerson,
  setPaymentForEverybodyPerson,
  setPaymentForEverybodyAmount,
  people,
  addPaymentForEverybody,
  paymentFromSinglePerson,
  setPaymentFromSinglePerson,
  paymentToSinglePerson,
  setPaymentToSinglePerson,
  setPaymentToAnotherAmount,
  addPaymentFromOnePersonToAnother,
  paymentForEverybody,
  paymentsFromOnePersonToAnother,
  paymentToAnotherAmount,
  paymentForEverybodyAmount,
}) => {
  return (
    <div>
      <h2> Payments</h2>
      <h3>One Person paying for everybody</h3>
      <label>Who is paying</label>
      <select
        value={paymentForEverybodyPerson}
        onChange={(event) => {
          setPaymentForEverybodyPerson(Number(event.target.value));
        }}
      >
        {people.map((person) => (
          <option key={person.id} value={person.id}>
            {person.personName}
          </option>
        ))}
      </select>
      <label>How much is paid?</label>
      <input
        type="number"
        value={paymentForEverybodyAmount}
        onChange={(event) => {
          setPaymentForEverybodyAmount(Number(event.target.value));
        }}
      ></input>
      <button onClick={addPaymentForEverybody}>Register Payment</button>

      <h3>One person paying to another person</h3>
      <label>Who is paying</label>
      <select
        value={paymentFromSinglePerson}
        onChange={(event) => {
          setPaymentFromSinglePerson(Number(event.target.value));
        }}
      >
        {people.map((person) => (
          <option key={person.id} value={person.id}>
            {person.personName}
          </option>
        ))}
      </select>
      <label>to whom</label>
      <select
        value={paymentToSinglePerson}
        onChange={(event) => {
          setPaymentToSinglePerson(Number(event.target.value));
        }}
      >
        {people.map((person) => (
          <option key={person.id} value={person.id}>
            {person.personName}
          </option>
        ))}
      </select>
      <label>How much is paid?</label>
      <input
        type="number"
        value={paymentToAnotherAmount}
        onChange={(event) => {
          setPaymentToAnotherAmount(Number(event.target.value));
        }}
      ></input>
      <button onClick={addPaymentFromOnePersonToAnother}>
        Register Payment
      </button>
      <h3> List of Payments</h3>
      {paymentForEverybody.map((payment, index) => (
        <div key={index}>
          {getNameById(payment.from, people)} paid {payment.amount}
        </div>
      ))}
      {paymentsFromOnePersonToAnother.map((payment, index) => (
        <div key={index}>
          {getNameById(payment.from, people)} paid {payment.amount} to{" "}
          {getNameById(payment.to, people)}
        </div>
      ))}
    </div>
  );
};

export default Payment;
