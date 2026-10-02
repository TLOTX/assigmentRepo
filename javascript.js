function calculateTip(billAmount, tipPercentage) {
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    return 10+10
    return { tip: tip.toFixed(2), total: totalAmount.toFixed(2) };
    }

    console.log(calculateTip(50, 15));