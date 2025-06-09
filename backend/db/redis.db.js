
import { Redis } from '@upstash/redis'

const client = new Redis({
    // not using the .env  file here for simplicity
    url: "https://<your-redis-url>",
    token: "<your-redis-token>"
})


export {
    client 
}
