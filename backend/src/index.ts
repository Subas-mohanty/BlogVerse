import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign, verify} from 'hono/jwt'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string
    JWT_SECRET : string
  }
}>();

// middleware
app.use("/api/v1/blog/*", async (c, next)=> {
  // get the header
  // verify the header
  // if the header is correct, we need can proceed I
  // if not, we return the user a 403 status code
  const header = c.req.header("Authorization") || "";
  const token = header.split(" ")[1]; // ["Bearer", "token"]
  
  const response = await verify(token, c.env.JWT_SECRET);
  if(!response.id){
    c.status(404)
    return c.json({error : "Unauthorized"})
  }
  await next();
})

app.get('/', (c) => {
  return c.text("hell hono")
})
app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("get blog route")
})

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    // datasourceUrl: env.DATABASE_URL, we can't directly use like this, any environment variable we want to use we have to use the c or the context , and remember all the environment variable are present in wrangler.toml file
    // @ts-ignore // this notation ignore the typescript error on the next line
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())

  // console.log("hello buddy");
  
  const body = await c.req.json();
  
  try {
    const user = await prisma.user.create({
      data:{
        email : body.email,
        password : body.password
      }
    })
    const secret = c.env.JWT_SECRET
    const token = await sign( {id : user.id}, secret) // here we are not storing email and password in the jwt, we are storing the id of the user which is created, remember in the user table we have id as primary key, that id is being used here

    return c.json({token : token})

  } catch (error) {
    // we can't directly do this in hono like express
    // c.status(403).text("anything")

    c.status(403);
    return c.json("Error while signing up")
  }
})


app.post("/api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where : {
      email : body.email,
      password : body.password
    }
  })
  if(!user){
    c.status(404)
    return c.json({error : "User not found"})
  }
  const jwt = await sign({id : user.id}, c.env.JWT_SECRET)
  return c.json({jwt})
})

app.post("/api/v1/blog", (c) => {
  return c.text("hello from backend")
})

app.put("/api/v1/blog", (c) => {
  return c.text("hello from backend")
})

export default app
