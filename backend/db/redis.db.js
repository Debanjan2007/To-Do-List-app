
import { Redis } from '@upstash/redis'

const client = new Redis({
    // not using the .env  file here for simplicity
    url: "https://helpful-mouse-19959.upstash.io",
    token: "AU33AAIjcDFlZGQ0OGU2YzAxZmI0ZWUxODIzNzVhMGNhMjVkZGRlMHAxMA"
})


export {
    client 
}