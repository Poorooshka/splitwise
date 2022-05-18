const PaymentsList = ({
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
    result.push(
      <div key={key}>
        <div>{totalPaymentsForEachUser[key].name}</div>
        <div>
          {totalPaymentsForEachUser[key].amount -
            totalToAllPayment / people.length}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2> Final Result</h2>
      {result}
    </div>
  );
};

export default PaymentsList;
