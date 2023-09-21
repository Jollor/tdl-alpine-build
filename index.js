const tdl= require('tdl')
const client = tdl.createClient({
    apiId: '<api_id>',
    apiHash: '<api_hash>',
    databaseDirectory: `./db`,
    filesDirectory: `./files`,
    useTestDc: true,
    verbosityLevel: 2
  })

console.log('Client', client)
