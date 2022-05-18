import { useCallback, useState } from "react";

const usePayments = ({ people }) => {
  const [paymentForEverybody, setPaymentForEverybody] = useState([]);
  const [paymentForEverybodyAmount, setPaymentForEverybodyAmount] = useState(0);
  const [paymentForEverybodyPerson, setPaymentForEverybodyPerson] =
    useState("");
  const addPaymentForEverybody = useCallback(() => {
    setPaymentForEverybody([
      ...paymentForEverybody,
      {
        from: paymentForEverybodyPerson,
        amount: paymentForEverybodyAmount,
      },
    ]);
    setPaymentForEverybodyPerson(people[0].id);
    setPaymentForEverybodyAmount(0);
  }, [
    paymentForEverybody,
    paymentForEverybodyAmount,
    paymentForEverybodyPerson,
    people,
  ]);

  const [paymentsFromOnePersonToAnother, setPaymentsFromOnePersonToAnother] =
    useState([]);
  const [paymentFromSinglePerson, setPaymentFromSinglePerson] = useState("");
  const [paymentToSinglePerson, setPaymentToSinglePerson] = useState("");
  const [paymentToAnotherAmount, setPaymentToAnotherAmount] = useState(0);

  const addPaymentFromOnePersonToAnother = useCallback(() => {
    setPaymentsFromOnePersonToAnother([
      ...paymentsFromOnePersonToAnother,
      {
        from: paymentFromSinglePerson,
        to: paymentToSinglePerson,
        amount: paymentToAnotherAmount,
      },
    ]);
    setPaymentFromSinglePerson(people[0].id);
    setPaymentToAnotherAmount(0);
  }, [
    paymentFromSinglePerson,
    paymentToAnotherAmount,
    paymentToSinglePerson,
    paymentsFromOnePersonToAnother,
    people,
  ]);

  return {
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
  };
};

export default usePayments;
