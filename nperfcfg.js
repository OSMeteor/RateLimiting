/**
 * Created by osmeteor on 2/21/17.
 */
module.exports = {
    settings: {
        concurrency: 20,  // -c
        max_requests: 600,  // -n
        output_format: 'text' // -o 'text' or 'json'
    },
    targets: {
        // can have multiple targets here
        // pick one using the --target commandline argument
        local: {
            host: 'localhost',
            port: 3000,
            path: '/api',
            headers: {
            }
        },
        google: {
            host: 'www.google.com',
            port: 80,
            path: '/'
        }
    }
};
