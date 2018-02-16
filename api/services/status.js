var Messages = require('./messages');

var Status = {
    STATUS_ERROR: 500,
    STATUS_BAD_REQUEST: 400
};

Status.respond = function (res, data, status, messageCode) {
    console.log('status: ' + JSON.stringify(status));
    console.log('messageCode: ' + JSON.stringify(messageCode));
    if (status) {

        if (status.constructor === "".constructor) {
            // status = messageCode
            res.send({
                code: status,
                message: Messages[status],
                data: data
            });
        }
        else {
            res.status(status).send({
                code: messageCode,
                message: Messages[messageCode],
                data: data
            });
        }
    }
    else {
        res.send(data);
    }
};

module.exports = Status;