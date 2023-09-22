//Importaciones de módulos
const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');
//Definición de una extensión personalizada para"joi"
const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});
//Agrega una nueva regla llamada escapeHTML que se utilizará para limpiar el contenido HTML de las cadenas de texto.

const Joi = BaseJoi.extend(extension)

module.exports.campgroundSchema = Joi.object({
    campground: Joi.object({
        title: Joi.string().required().escapeHTML(),
        price: Joi.number().required().min(0),
        location: Joi.string().required().escapeHTML(),
        description: Joi.string().required().escapeHTML()
    }).required(),
    deleteImages: Joi.array()
});
//El esquema está definido utilizando la instancia personalizada de joi
// Cada campo del esquema  se valida utilizando la regla personalizada escapeHTML para limpiar cualquier HTML malicioso.

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required().escapeHTML()
    }).required()
})
//Esto exporta otro esquema de validación llamado reviewSchema.
// Al igual que el anterior, se utiliza la regla personalizada escapeHTML para limpiar el campo body de HTML malicioso
