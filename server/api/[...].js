export default defineEventHandler(e => {
    return $fetch(`https://api.coinlore.net${e.node.req.url}`)
})