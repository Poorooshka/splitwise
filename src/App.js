import { useState } from "react";
import People from "./People";
import usePayments from "./usePayments";
import usePeople from "./usePeople";
import Payment from "./Payment";
import DebtsList from "./DebtsList";

const App = () => {
  const [hasTripStarted, setHasTripStarted] = useState(false);

  const { people, newPersonName, setNewPersonName, deletePerson, addPerson } =
    usePeople();

  const {
    paymentForEverybody,
    paymentForEverybodyAmount,
    setPaymentForEverybodyAmount,
    paymentForEverybodyPerson,
    setPaymentForEverybodyPerson,
    addPaymentForEverybody,
    paymentsFromOnePersonToAnother,
    paymentFromSinglePerson,
    setPaymentFromSinglePerson,
    paymentToSinglePerson,
    setPaymentToSinglePerson,
    paymentToAnotherAmount,
    setPaymentToAnotherAmount,
    addPaymentFromOnePersonToAnother,
  } = usePayments({ people });

  return (
    <div>
      <h2>People</h2>
      {!hasTripStarted && (
        <People
          people={people}
          newPersonName={newPersonName}
          setNewPersonName={setNewPersonName}
          deletePerson={deletePerson}
          addPerson={addPerson}
          setHasTripStarted={setHasTripStarted}
          setPaymentForEverybodyPerson={setPaymentForEverybodyPerson}
          setPaymentFromSinglePerson={setPaymentFromSinglePerson}
          setPaymentToSinglePerson={setPaymentToSinglePerson}
        />
      )}
      {hasTripStarted && (
        <>
          <Payment
            paymentForEverybodyPerson={paymentForEverybodyPerson}
            setPaymentForEverybodyPerson={setPaymentForEverybodyPerson}
            setPaymentForEverybodyAmount={setPaymentForEverybodyAmount}
            people={people}
            addPaymentForEverybody={addPaymentForEverybody}
            paymentFromSinglePerson={paymentFromSinglePerson}
            setPaymentFromSinglePerson={setPaymentFromSinglePerson}
            paymentToSinglePerson={paymentToSinglePerson}
            setPaymentToSinglePerson={setPaymentToSinglePerson}
            setPaymentToAnotherAmount={setPaymentToAnotherAmount}
            addPaymentFromOnePersonToAnother={addPaymentFromOnePersonToAnother}
            paymentForEverybody={paymentForEverybody}
            paymentsFromOnePersonToAnother={paymentsFromOnePersonToAnother}
            paymentForEverybodyAmount={paymentForEverybodyAmount}
            paymentToAnotherAmount={paymentToAnotherAmount}
          />
          <DebtsList
            paymentsFromOnePersonToAnother={paymentsFromOnePersonToAnother}
            paymentForEverybody={paymentForEverybody}
            people={people}
          />
        </>
      )}
    </div>
  );
};

export default App;
