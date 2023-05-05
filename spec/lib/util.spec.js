const utils = require("../../lib/utils");

const expectedDateFormat = "2023-05-26 00:00:00";
const expectedNextDayDateFormat = "2023-05-27 00:00:00";
const rawDate = "26/05/2023";

describe("Convert date - ", function () {
  it("From raw date to EventML format", function () {
    const date = utils.toDateFromRawString(rawDate);
    const result = utils.convertDatetoEventMLFormat(date);

    expect(result).toEqual(expectedDateFormat);
  });

  it("From date to EventML format", function () {
    const date = new Date("2023-05-26");
    const result = utils.convertDatetoEventMLFormat(date);

    expect(result).toEqual(expectedDateFormat);
  });

  it("From raw date to next day on EventML format", function () {
    const date = utils.toDateFromRawString(rawDate);
    const nextDayDate = utils.addOneDay(date);
    const result = utils.convertDatetoEventMLFormat(nextDayDate);

    expect(result).toEqual(expectedNextDayDateFormat);
  });
});
