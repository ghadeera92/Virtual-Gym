const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')

const User = require('./models/user.model');
const Trainer = require("./models/trainer.model");
const Class = require("./models/class.model");
AdminBro.registerAdapter(AdminBroMongoose)
 const adminBro = new AdminBro({
   rootPath: '/adminbro',
   resources:
   [
     {
       resource: User,
       options: {
         // We'll add this later
       }
     },
     {
        resource: Trainer,
        options: {
          // We'll add this later
        }
      },
      {
        resource: Class,
        options: {
          // We'll add this later
        }
      }
   ]
 })

// const adminBro = new AdminBro({
//     databases: [],
//     rootPath: '/admin',
//   })

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro)