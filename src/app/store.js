import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducer/account/account.reducer";
import brandReducer from "./reducer/brand/brand.reducer";
import billReducer from "./reducer/bill/bill.reducer";
import billDetailReducer from "./reducer/bill-detail/bill-detail.reducer";
import billHistoryReducer from "./reducer/bill-history/bill-history.reducer";
import cartReducer from "./reducer/cart/cart.reducer";
import cartDetailReducer from "./reducer/cart-detail/cart-detail.reducer";
import categoryReducer from "./reducer/category/category.reducer";
import colorReducer from "./reducer/color/color.reducer";
import customerInformationReducer from "./reducer/customer-information/customer-information.reducer";
import imageReducer from "./reducer/image/image.reducer";
import materialReducer from "./reducer/material/material.reducer";
import notificationReducer from "./reducer/notification/notification.reducer";
import pointAddHistoryReducer from "./reducer/point-add-history/point-add-history.reducer";
import productReducer from "./reducer/product/product.reducer";
import productDetailReducer from "./reducer/product-detail/product-detail.reducer";
import promotionReducer from "./reducer/promotion/promotion.reducer";
import promotionProductDetailReducer from "./reducer/promotion-product-detail/promotion-product-detail.reducer";
import rankRuleReducer from "./reducer/rank-rule/rank-rule.reducer";
import roleReducer from "./reducer/role/role.reducer";
import shoesCollarReducer from "./reducer/shoes-collar/shoes-collar.reducer";
import sizeReducer from "./reducer/size/size.reducer";
import soleHeightReducer from "./reducer/sole-height/sole-height.reducer";
import transactionReducer from "./reducer/transaction/transaction.reducer";
import rankReducer from "./reducer/rank/rank.reducer";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    brand: brandReducer,
    bill: billReducer,
    billDetail: billDetailReducer,
    billHistory: billHistoryReducer,
    cart: cartReducer,
    cartDetail: cartDetailReducer,
    category: categoryReducer,
    color: colorReducer,
    customerInformation: customerInformationReducer,
    image: imageReducer,
    material: materialReducer,
    notification: notificationReducer,
    pointAddHistory: pointAddHistoryReducer,
    product: productReducer,
    productDetail: productDetailReducer,
    promotion: promotionReducer,
    promotionProductDetail: promotionProductDetailReducer,
    rank: rankReducer,
    rankRule: rankRuleReducer,
    role: roleReducer,
    shoesCollar: shoesCollarReducer,
    size: sizeReducer,
    soleHeight: soleHeightReducer,
    transaction: transactionReducer,
  },
});

export const dispatch = store.dispatch;
export const getState = store.getState;
