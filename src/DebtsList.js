import DebtsDetails from "./DebtsDetails";

const DebtsList = ({
  paymentsFromOnePersonToAnother,
  paymentForEverybody,
  people,
}) => {
  let totalToAllPayment = 0;
  let totalPaymentsForEachUser = {};

  for (let personIndex = 0; personIndex < people.length; personIndex++) {
    totalPaymentsForEachUser[people[personIndex].id] = {
      amount: 0,
      name: people[personIndex].personName,
    };
  }

  for (
    let paymentIndex = 0;
    paymentIndex < paymentForEverybody.length;
    paymentIndex++
  ) {
    totalToAllPayment += paymentForEverybody[paymentIndex].amount;
    totalPaymentsForEachUser[paymentForEverybody[paymentIndex].from].amount +=
      paymentForEverybody[paymentIndex].amount;
  }

  for (
    let paymentIndex = 0;
    paymentIndex < paymentsFromOnePersonToAnother.length;
    paymentIndex++
  ) {
    totalPaymentsForEachUser[
      paymentsFromOnePersonToAnother[paymentIndex].from
    ].amount += paymentsFromOnePersonToAnother[paymentIndex].amount;
    totalPaymentsForEachUser[
      paymentsFromOnePersonToAnother[paymentIndex].to
    ].amount -= paymentsFromOnePersonToAnother[paymentIndex].amount;
  }

  const result = [];
  for (const key in totalPaymentsForEachUser) {
    totalPaymentsForEachUser[key].amount -= totalToAllPayment / people.length;
    if (totalPaymentsForEachUser[key].amount) {
      result.push(
        <div key={key}>
          <span>{totalPaymentsForEachUser[key].name}</span> should{" "}
          {totalPaymentsForEachUser[key].amount > 0 ? "get " : "pay "}
          <span>{Math.abs(totalPaymentsForEachUser[key].amount)}</span>
        </div>
      );
    }
  }

  return (
    <div>
      <h3> List of Debts</h3>
      {result}
      <DebtsDetails totalPaymentsForEachUser={totalPaymentsForEachUser} />
    </div>
  );
};

export default DebtsList;
