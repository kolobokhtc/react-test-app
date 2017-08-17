/**
 * Created by eng210 on 17.08.2017.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ArticleSchema = new Schema({
    id: ObjectId,
    articleUrl: String,
    originalText: String,
    usersText: String,
    isApproved: {type: Boolean, default: false}
});

module.exports = mongoose.model('ArticleEntity', ArticleSchema);