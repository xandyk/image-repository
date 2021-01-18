const imageModal = require('../model/imageModel')

const searchByName = async (filename) => {
    try {
        const imageName = await imageModal.find({ name: filename});
        return imageName
    } catch (error) {
        return error;
    }
}

const searchByCaption = async (keyword) => {
    try {
        const regex = new RegExp(keyword, 'gi')
        const imageCaption = await imageModal.find({ caption: { $regex: regex }});
        return imageCaption
    } catch (error) {
        return error;
    }
}

module.exports = {searchByCaption, searchByName};
