const mongoose = require('mongoose');
const Review = require('./review')
const Schema = mongoose.Schema;
//Define el  Esquema del (CampgroundSchema)
const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});
//Se agrega un middleware post a este esquema que se ejecutará después de que se elimine un documento de campamento usando la función 
CampgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})
// Este middleware se encarga de eliminar todas las reseñas asociadas al campamento que se está eliminando

module.exports = mongoose.model('Campground', CampgroundSchema);