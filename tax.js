var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [{
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

function calculatetax(companySalesData, salesTaxRates) {
  companyprofile = {};
  for (var i = 0; i < companySalesData.length; i++) {
    var totalSales = 0;

    for (var j = 0; j < companySalesData[i]["sales"].length; j++) {

      totalSales += companySalesData[i]["sales"][j];

    }
    var totalTax = totalSales * salesTaxRates[companySalesData[i]["province"]];

    if (companySalesData[i]["name"] in companyprofile) {
      console.log(companyprofile[companySalesData[i]["name"]]["totalSales"]);
      companyprofile[companySalesData[i]["name"]]["totalSales"] += totalSales;
      companyprofile[companySalesData[i]["name"]]["totalTaxes"] += totalTax;
    } else {
      companyprofile[companySalesData[i]["name"]] = {

        "totalSales": totalSales,
        "totalTaxes": totalTax
      }
    }

  }
  return companyprofile

}
console.log(calculatetax(companySalesData, salesTaxRates));
