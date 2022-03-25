const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql')

const app = express()

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Hello World'
            }
        })
    })
})


// This is when we go to localhost/graphql to run the graphql interface
app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true // This is for the GraphQL UI (Like Postmen)
}))
app.listen(5001,() => console.log('Server running'))