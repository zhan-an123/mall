import { request } from './request'
export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    });
}
//商品详情信息
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.realPrice = itemInfo.lowNowPrice;
        this.columns = columns;
        this.services = services;
    }
}
//店铺信息
export class ShopInfo {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo;
        this.shopUrl = shopInfo.shopUrl;
        this.shopName = shopInfo.name;
        this.cSells = shopInfo.cSells;
        this.cGoods = shopInfo.cGoods;
        this.score = shopInfo.score;
    }
}
//商品详情图片
export class DetailImage {
    constructor(detailInfo) {
        this.desc = detailInfo.desc;
        this.detailImage = detailInfo.detailImage;
    }
}
//商品评价
export class GoodsComment {
    constructor(rate) {
        this.cRate = rate.cRate;
        this.list = rate.list;
    }
}
//商品参数
export class GoodsParams {
    constructor(info, rule) {
        this.image = info.image ? info.image[0] : '';
        this.info = info.set;
        this.sizes = rule.tables[0];
    }
}
//获取推荐数据
export function getRecommend() {
    return request({
        url: '/recommend',
    });
}