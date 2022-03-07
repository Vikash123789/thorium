const OrderModel = require("../models/orderModel.js");
const ProductModel = require("../models/Product.js");
const UserModel = require("../models/userModel.js");

const NewOrder = async function (req, res) {
    let data = req.body;
    let pId = data.productId;
    let uId = data.userId;
    let freeUser = req.headers.isfreeappuser;
    let user = await UserModel.findById(uId);
    let Product = await ProductModel.findById(pId);

    if (data.hasOwnProperty("userId") == false) {
        res.send({ error: "userID is required" });
    } else if (!user) {
        res.send({ error: "userID Wrong entered" });
    }

    if (data.hasOwnProperty("productId") == false) {
        res.send({ error: "productId is required" });
    } else if (!Product) {
        res.send({ error: "ProductID Worng entered" });
    }
    let ItemDetail = await ProductModel.findById(pId);

    let Value = ItemDetail.price;
    let ClientDetail = await UserModel.findById(uId);
    let Balance = ClientDetail.Balance;

    if (freeUser === "false") {
        if (Balance > Value) {
            let updatedBalance = await UserModel.findByIdAndUpdate(
                { _id: uId },
                { $inc: { Balance: -Value } },
                { new: true }
            );
            Value = data.amount;
            data.freeUser = false;
            let order_Detail = await OrderModel.create(data);
            res.send({ order: order_Detail });
        } else {
            res.send({ error: "Insufficient Fund" });
        }
    } else {
        data.amount = 0;
        data.freeUser = true;
        let orderDetails = await OrderModel.create(data);
        res.send({ order: orderDetails });
    }
};

module.exports.NewOrder = NewOrder;
