const { Reviews } = require("../../db");

const getDisabledReviewsController = async () => {
    const disabledReviews = await Reviews.findAll({
        where: {
            banned: true,
        },
    });

    return disabledReviews;
};

module.exports = { getDisabledReviewsController };