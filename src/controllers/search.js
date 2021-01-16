const imageModal = require('../model/imageModel')

const search = async (keyword) => {
    try {
        const regex = new RegExp(keyword, 'gi')
        const images = await imageModal.find({ caption: { $regex: regex }});
        return images
    } catch (error) {
        return error;
    }
    
}

module.exports = search;

// i'm reading the doc -> search for $regex
// search function done
// it looks so simple! 
// what's RegExp-> yep
// now search endpoint route? create it where you wanna create