const mongoose = require("mongoose");

const { Schema } = mongoose;

const closetSchema = new Schema(
    {
        wornDate: {
            type: Date,
            default: Date.now,
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true,
                trim: true,
            },
        ],
    },
    {
        toJSON: { virtuals: true },
    }
);

const Closet = mongoose.model("Closet", closetSchema);

module.exports = Closet;
