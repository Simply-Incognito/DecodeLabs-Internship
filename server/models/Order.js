"use strict";

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    CustomerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        re: 'Product'
    },
    Quantity: {
        type: Number,
        default: 0
    },
    UnitPrice: {
        type: Number,
        default: 0.0
    },
    ShippingAddress: {
        type: String,
        required: [true, "Shipping address missing!"]
    },
    PaymentMethod: {
        type: String,
        default: 'card',
        required: [true, "Payment method required!"]
    },
    OrderStatus: {
        type: String,
        enum: ['pending', 'processing']
    },
    OrderDate: {
        type: Date,
        default: Date.now,
        required: [true, "Order date is missing..."]
    },
    CouponCode: String,
    ReferalSource: String,
    TotalPrice: Number
});

const orderModel = mongoose.Model('Order', orderSchema);