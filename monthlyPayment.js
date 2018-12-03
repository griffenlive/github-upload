var $ = function(id) {
	return document.getElementById(id);
}
var calculatePayment = function() {
	var intMonthlyPayment = 0;

	var intInitialLoan = parseFloat($("Loan").value);
	var stringFullName = ($("fullName").value);
	var intAnnualInterest = parseFloat($("annualInterest").value);
	var intNumberMonths = parseInt($("LoanMonths").value);

	if (isNaN(intInitialLoan) || intInitialLoan < 0) {
		alert("Please enter a valid number that is greater than 0 as an input for the Initial Loan Amount.");
		$("Loan").value = "";
	} else if (isNaN(intNumberMonths) || intNumberMonths < 0) {
		alert("Please enter a valid number that is greater than 0 as an input for the number of months.");
		$("LoanMonths").value = "";
	} else if (isNaN(intAnnualInterest) || (intAnnualInterest < 0) || (intAnnualInterest > 100)) {
		alert("Please enter a valid number between 0 and 100 as an input for Annual Interest.");
		$("annualInterest").value = "";
	} else {

		intMonthlyInterest = (intAnnualInterest / 1200);

		// payment = principle * monthly interest/(1 - (1/(1+MonthlyInterest)*Months))
		intMonthlyPayment = parseFloat(intInitialLoan * intMonthlyInterest / (1 - (Math.pow(1 / (1 + intMonthlyInterest), intNumberMonths))));

		$("output").value = stringFullName + ", your monthly payment is $" + intMonthlyPayment.toFixed(2);
	}
	//else
}//calculatePayment

window.onload = function() {
	$("LoanMonths").value = "";
	$("Loan").value = "";
	$("fullName").value = "";
	$("annualInterest").value = "";

	$("calculate").onclick = calculatePayment;

	$("fullName").focus();
}