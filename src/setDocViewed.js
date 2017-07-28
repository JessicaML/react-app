onClick.this={

db.get(this.doc._id).then(function(doc) {
  return db.put({
    _rev: doc._rev,
    viewed: true
  });
}).then(function(response) {
  // handle response

  // update badge
}).catch(function (err) {
  console.log(err);
});

}


// import chrono from 'chrono-node'

// const BEFORE_REGEX = /before:"(.*?)"/
// const AFTER_REGEX = /after:"(.*?)"/

// // Takes in query as a string and extracts startDate and endDate
// export default function extractTimeFiltersFromQuery(query) {
//     const matchedBefore = query.match(BEFORE_REGEX)
//     const matchedAfter = query.match(AFTER_REGEX)

//     let startDate
//     let endDate
//     if (matchedBefore) {
//         const parsedDate = chrono.parseDate(matchedBefore[1])
//         endDate = parsedDate && parsedDate.getTime()
//     }
//     if (matchedAfter) {
//         const parsedDate = chrono.parseDate(matchedAfter[1])
//         startDate = parsedDate && parsedDate.getTime()
//     }

//     const extractedQuery = query
//         .replace(BEFORE_REGEX, '')
//         .replace(AFTER_REGEX, '')
//         .trim()

//     return {
//         startDate,
//         endDate,
//         extractedQuery,
//     }
// }
