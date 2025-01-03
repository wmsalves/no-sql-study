// Database to use
use("sample_training");

// Insert a documents into the routes collection.
db.getCollection("routes").insertMany([
  {
    airline: {
      id: 410,
      name: "Aerocondor",
      alias: "2B",
      iata: "ARD",
    },
    src_airport: "CEK",
    dst_airport: "KZN",
    codeshare: "",
    stops: 0,
    airplane: "CS2",
  },
  {
    airline: {
      id: 410,
      name: "Aerofly",
      alias: "AJ",
      iata: "AJT",
    },
    src_airport: "AMS",
    dst_airport: "LHR",
    codeshare: "",
    stops: 1,
    airplane: "A532",
  },
  {
    airline: {
      id: 410,
      name: "Aerosky",
      alias: "JA",
      iata: "JTA",
    },
    src_airport: "LHR",
    dst_airport: "NYC",
    codeshare: "",
    stops: 0,
    airplane: "B123",
  },
]);

// Run a find command to view
const getFlyDetails = db
  .getCollection("routes")
  .find({
    airline: {
      id: 410,
      name: "Aerosky",
      alias: "JA",
      iata: "JTA",
    },
    src_airport: "LHR",
    dst_airport: "NYC",
    codeshare: "",
    stops: 0,
    airplane: "B123",
  })
  .count();

// Print a message to the output window.
console.log(getFlyDetails);

// Here we run an aggregation and open a cursor to the results.
db.getCollection("routes").aggregate([
  {
    $match: {
      airline: {
        id: 410,
        name: "Aerosky",
        alias: "JA",
        iata: "JTA",
      },
      src_airport: "LHR",
      dst_airport: "NYC",
      codeshare: "",
      stops: 0,
      airplane: "B123",
    },
  },
  {
    $group: {
        _id: "$airplane", // Group by 'airplane'
        totalCount: { $sum: 1 }, // Counts the number of documents for each 'plane'
    },
  },
]);
