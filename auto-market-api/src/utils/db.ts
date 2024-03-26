import moongose from 'mongoose'


export const connectDB =async () => {
   try {
    await moongose.connect('mongodb://localhost/auto-market')
    console.log('Se ha echo conexión a la base de datos auto-market')
   } catch (error) {
    console.log(error)
   } 
}