const cheerio = require("cheerio");
const builder = require("xmlbuilder2");

export async function getXMLFromTrisulFutureEvents() {
  const futureEvents = await scrapTrisulFutureEvents();

  const xml = await createXML(futureEvents);
  return xml;
}

async function scrapTrisulFutureEvents() {
  const futureEvents = [];

  // Make a GET request to the website you want to scrape
  await fetch("https://ri.trisul-sa.com.br/servicos-ri/calendario-de-eventos/")
    .then((response) => response.text())
    .then((html) => {
      // Load the HTML content of the website into Cheerio
      const $ = cheerio.load(html);
      $("#eventos-futuros tbody tr").each(function (i) {
        const startDateRaw = $(this).find("td.data").text().trim();
        const title = $(this).find("td.data + td").text().trim();

        // split the date string into its components
        const [day, month, year] = startDateRaw.split("/");

        const startDateISO = new Date(`${year}-${month}-${day}`).toISOString();
        const tempDate = new Date(`${year}-${month}-${day}`);
        const endDateISO = new Date(
          tempDate.setDate(tempDate.getDate() + 1)
        ).toISOString();
        const id = (new Date().getTime().toString() + i).toString();

        const { startDate, endDate } = newDateFormatFromISOString(
          startDateISO,
          endDateISO
        );

        futureEvents.push({
          startDate,
          endDate,
          title,
          id,
        });
      });
    })
    .catch((error) => console.error(error));

  return futureEvents;
}

async function createXML(events) {
  const obj = {
    events: {
      event: events.map((e) => ({
        "@id": e.id,
        title: e.title,
        startDate: e.startDate,
        endDate: e.endDate,
        where: "",
        description: "",
      })),
    },
  };

  return builder.create(obj).end({ prettyPrint: true, headless: true });
}

function newDateFormatFromISOString(startDateISO, endDateISO) {
  const startDate = startDateISO.replace("T", " ").slice(0, -5);
  const endDate = endDateISO.replace("T", " ").slice(0, -5);

  return { startDate, endDate };
}
