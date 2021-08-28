# food-delivery

Food delivery app in NestJS, React JS, GraphQL.

### Notes

Doing this
(const server = new ApolloServer({
typeDefs,
resolvers,
});) is same as
(imports: [
GraphQLModule.forRoot()
])

There are two ways:

1.  Schema first
2.  Code First approach.

In first one

GraphQlModule.forRoot({
typePaths:['./**/*.graphql'],
})

Second One
GraphQLModule.forRoot({
autoSchemaFile: true,
}),

ObjectType: This Describe how our model will looks like.

@objectType()
export class XYZ{
@Field(is => String)
name:string;
}

InputType: Which will allow you to pass object parameter instead on passing as single value each time(Works as single object)

ArgsType: Which will do the same things.but it will give GraphQL a list as args.
