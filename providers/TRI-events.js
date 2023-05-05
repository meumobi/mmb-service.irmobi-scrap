const cheerio = require("cheerio");
const utils = require("../lib/utils");
const { v5: uuidv5 } = require("uuid");

const scrapper = function (url) {
  const items = [];
  const data = {
    events: {
      event: [],
    },
  };

  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const $ = cheerio.load(html);
      $("#eventos-futuros tbody tr").each(function (i) {
        const startDateRaw = $(this).find("td.data").text().trim();

        const startDate = utils.toDateFromRawString(startDateRaw);
        const endDate = utils.addOneDay(startDate);
        const title = $(this).find("td.data + td").text().trim();

        items.push({
          title,
          "@id": uuidv5(startDateRaw + i, process.env.UUID_NAMESPACE),
          start_raw_date: startDateRaw,
          start_date: utils.convertDatetoEventMLFormat(startDate),
          end_date: utils.convertDatetoEventMLFormat(endDate),
          description: "",
          where: "",
        });
      });

      data.events.event = items;

      return data;
    });
};

exports.scrapper = scrapper;
