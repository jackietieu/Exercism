export default {
  parse: str => str.match(/[a-zA-Z][a-z]+|[A-Z]+/g)
    .map(word => word[0].toUpperCase())
    .join('')
}
