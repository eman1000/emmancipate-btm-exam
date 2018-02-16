# Blockchain Technology Malaysia
### Frontend Developer Practical Assessment
#### Colors

###### Pre-requisite
To run the backend codes, make sure to install the following pre-requisite:
* Node Package Manager (https://www.npmjs.com/get-npm)

###### Building and Running the Backend
1. Install the node modules.
     ``npm install``
2. Run the application. Take note that the backend runs in **port 3003** in the localhost.
     ``node .``

###### List of Backend Services
####
METHOD | End Point | Description
-------|-------|-------
POST | /color | Creates a color item. The fields are: ``name``, ``decription``, and ``iconClass (optional)``.
GET | /color/list | Lists all the colors previously saved.
GET | /color/item/:colorId | Returns the color information based on the ``colorId`` provided
DELETE | /color/item/:colorId | Removes the color in the list based on the ``colorId`` provided