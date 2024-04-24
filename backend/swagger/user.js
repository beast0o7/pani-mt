/**
* @swagger
* /user/:
*   get:
*     tags:
*       - Users
*     summary: get all users
*     security:
*       - bearerAuth: []
*     consumes:
*       - application/json
*     responses:
*       200:
*         description: Users fetched successfully
*         schema:
*           type: object
*           properties:
*             message:
*               title: message
*               type: string
*               example: success
*       404:
*         description: Users not found
*         schema:
*           type: object
*           properties:
*             message:
*               title: message
*               type: string
*               example: users not found
*/
