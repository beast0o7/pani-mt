/**
* @swagger
* /auth/signup:
*   post:
*     tags:
*       - Auth
*     summary: register user
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         required: true
*         schema:
*           type: object
*           required: [ username, email, password]
*           properties:
*             username:
*               type: string
*               description: username
*               example: chintu
*             email:
*               type: string
*               description: email
*               example: chintu@nimapinfotech.com
*             password:
*               type: string
*               description: password
*               example: chin1234
*     responses:
*       201:
*         description: user registered
*         schema:
*           type: object
*           properties:
*             message:
*               title: message
*               type: string
*               example: success
*       422:
*         description: Failed to add user
*         schema:
*           type: object
*           description: Auth
*           properties:
*             message:
*               title: message
*               type: string
*               example: failed to add user
* /auth/signin:
*   post:
*     tags:
*       - Auth
*     summary: login user
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         required: true
*         schema:
*           type: object
*           required: [ email, password]
*           properties:
*             email:
*               type: string
*               description: email
*               example: chintu@nimapinfotech.com
*             password:
*               type: string
*               description: password
*               example: chin1234
*     responses:
*       200:
*         description: user loggged in
*         schema:
*           type: object
*           properties:
*             message:
*               title: message
*               type: string
*               example: success
*       422:
*         description: Failed to sign in
*         schema:
*           type: object
*           description: Auth
*           properties:
*             message:
*               title: message
*               type: string
*               example: failed to sign in 
*/
