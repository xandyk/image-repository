const mongoose = require('mongoose')
const Image = require('../../src/model/imageModel')

const imageOneId = new mongoose.Types.ObjectId()
const imageOne = {
    _id: imageOneId,
    name: 'tree',
    caption: 'beautiful'
}

const setupDB = async () => {
    await new Image(
        imageOne
        ).save()
}

module.exports = {
    imageOneId,
    imageOne,
    setupDB
}