var fs = require('fs');
var ColorController = {};
var Status = require('../services/status');
var path = require("path");


ColorController.index = function (req, res) {
    res.send("COLOR MGT Backend is running.");
};

ColorController.createColor = function (req, res) {
    if (!req.body.name || !req.body.description) {
        Status.respond(res, undefined, Status.STATUS_ERROR, "E003");
        return;
    }

    var retVal = undefined;

    // Read file storage
    var data = fs.readFileSync(path.join(__dirname, "../data/color.json"));
    data = JSON.parse(data);

    var exists = false;
    if (data && data.length) {
        // check if color exists
        data.forEach(function (color) {
            if (color.name.toUpperCase() == req.body.name.toUpperCase().trim()) {
                exists = true;
                return;
            }
        });
    }

    if (exists) {
        Status.respond(res, undefined, Status.STATUS_ERROR, "E002");
    }
    else {
        var newId = 1;

        if (data.length) {
            newId = data[data.length - 1].id + 1;
        }

        var newData = {
            id: newId,
            name: req.body.name.trim(),
            description: req.body.description.trim(),
            iconClass: req.body.iconClass ? req.body.iconClass.trim() : ''
        };

        data.push(newData);

        // Write data into the file
        fs.writeFileSync(path.join(__dirname, "../data/color.json"), JSON.stringify(data));

        // Return the newly created data
        Status.respond(res, newData, "S001");
    }
};

ColorController.getColorById = function (req, res) {
    var retVal = undefined;

    // Read file storage
    var data = fs.readFileSync(path.join(__dirname, "../data/color.json"));
    data = JSON.parse(data);

    // Check if color exists
    if (data && data.length) {
        data.forEach(function (color) {
            if (color.id == req.params.colorId) {
                retVal = color;
                return;
            }
        });
    }

    if (retVal) {
        Status.respond(res, retVal, "S003");
    }
    else {
        Status.respond(res, undefined, Status.STATUS_ERROR, "E001");
    }

};

ColorController.getColorList = function (req, res) {
    var data = fs.readFileSync(path.join(__dirname, "../data/color.json"));
    res.send(JSON.parse(data));
};

ColorController.removeColors = function (req, res) {
    var retVal = undefined;

    // Read file storage
    var data = fs.readFileSync(path.join(__dirname, "../data/color.json"));
    data = JSON.parse(data);

    var exists = false;
    if (data && data.length) {
        // check if color exists
        data.forEach(function (color, idx) {
            if (color.id == req.params.colorId) {
                retVal = data.splice(idx, 1);
                return;
            }
        });
    }

    if (!retVal) {
        Status.respond(res, undefined, Status.STATUS_ERROR, "E001");
    }
    else {
        // Write updated list into the file
        fs.writeFileSync(path.join(__dirname, "../data/color.json"), JSON.stringify(data));

        Status.respond(res, retVal, "S002");
    }
};

module.exports = ColorController;