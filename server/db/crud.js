import mongoose from 'mongoose'

const crudSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
})

const Crud = mongoose.model('crud', crudSchema)

export default Crud