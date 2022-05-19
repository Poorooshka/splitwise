const DebtsDetails = ({ totalPaymentsForEachUser }) => {
  let totalPaymentsArray = [];
  let result = [];
  for (const key in totalPaymentsForEachUser) {
    totalPaymentsArray.push(totalPaymentsForEachUser[key]);
  }

  while (totalPaymentsArray.length > 1) {
    totalPaymentsArray = totalPaymentsArray.sort(
      ({ amount: a }, { amount: b }) => b - a
    );
    let whoShouldGetName = totalPaymentsArray[0].name;
    let whoShouldPayName =
      totalPaymentsArray[totalPaymentsArray.length - 1].name;
    let whoShouldGetAmount = totalPaymentsArray[0].amount;
    let whoShouldPayAmount =
      totalPaymentsArray[totalPaymentsArray.length - 1].amount;
    if (whoShouldGetAmount + whoShouldPayAmount > 0) {
      totalPaymentsArray[0].amount = whoShouldGetAmount + whoShouldPayAmount;
      totalPaymentsArray[totalPaymentsArray.length - 1].amount = 0;
    } else {
      totalPaymentsArray[0].amount = 0;
      totalPaymentsArray[totalPaymentsArray.length - 1].amount =
        whoShouldGetAmount + whoShouldPayAmount;
    }
    result.push(
      <div>
        {whoShouldPayName +
          " should pay " +
          Math.min(Math.abs(whoShouldGetAmount), Math.abs(whoShouldPayAmount)) +
          " to " +
          whoShouldGetName}
      </div>
    );
    console.log("result", result);
    totalPaymentsArray = totalPaymentsArray.filter((item) => {
      return !(item.amount < 0.0001 && item.amount > -0.0001);
    });
  }

  console.log("totalPaymentsArray", totalPaymentsArray);

  return (
    <div>
      <h3> Details of Debt Settlement </h3>
      {result}
    </div>
  );
};

export default DebtsDetails;
