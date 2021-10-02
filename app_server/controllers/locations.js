
const allLocations = (req, res) => {
    res.render("index", { title: "All locations" })
};

const detailsLocation = (req, res) => {
    res.render("index", { title: "Location details" })
};

const addComment = (req, res) => {
    res.render("index", { title: "Add comment" })
};


module.exports = {
    allLocations,
    detailsLocation,
    addComment
}