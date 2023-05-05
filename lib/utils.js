const toDateFromRawString = function (dateRaw) {
  const [day, month, year] = dateRaw.split("/").map((value) =>
    parseInt(value).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
  );
  /**
   * ISO Date: "2015-03-25" (The International Standard)
   * OBS: The computed date will be relative to your time zone.
   * https://www.w3schools.com/js/js_date_formats.asp
   */
  const date = new Date(`${year}-${month}-${day}T00:00:00Z`);

  return date;
};

const addOneDay = function (date) {
  const dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() + 1);
  return dateCopy;
};

const convertDatetoEventMLFormat = function (date) {
  return date.toISOString().slice(0, 10) + " 00:00:00";
};

exports.toDateFromRawString = toDateFromRawString;
exports.addOneDay = addOneDay;
exports.convertDatetoEventMLFormat = convertDatetoEventMLFormat;
