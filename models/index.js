// import models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'product_id'
});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    as: 'tagged_product',
    foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    as: 'tagged_product',
    foreignKey: 'tag_id'
});

ProductTag.belongsTo(Product, {
    foreignKey: 'product-tag_id'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag
};