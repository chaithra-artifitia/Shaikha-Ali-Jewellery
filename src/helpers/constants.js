export const commodityCalculation = (
    livePrice,
    spread,
    premium,
    fxRate,
    purity,
    unit,
    weight,
    charge
  ) => {
    let value =
      (Number(livePrice) + Number(spread) + Number(premium)) *
        (fxRate / 31.1035) *
        Number(purity) *
        Number(weight) *
        Number(unit) +
      Number(charge);
    if (value.toFixed(0).length < 5) {
      return value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else {
      return value.toLocaleString("en-US", { maximumFractionDigits: 0 });
    }
  };
  