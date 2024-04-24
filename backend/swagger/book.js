/**
* @swagger
* /books:
*   get:
*     tags:
*       - Books
*     summary: Filter and Search Books
*     security:
*       - bearerAuth: []
*     parameters:
*       - name: author
*         in: query
*         required: false
*         description: Filter books by Author
*         type: string
*       - name: publication_year
*         in: query
*         required: false
*         description: Filter books by Publication year.
*         type: integer
*     responses:
*       200:
*         description: List of books 
*         schema:
*           type: array
*       422:
*         description: No books found for the specified filters or keywords
*         schema:
*           type: object
*           properties:
*             message:
*               title: message
*               type: string
*               example: No books found for the specified filters or keywords
*   post:
*     tags:
*       - Books
*     summary: Add Books
*     security:
*       - bearerAuth: []
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         required: true
*         schema:
*           type: object
*           required: [title, author, publication_year]
*           properties:
*             title:
*               type: string
*               description: Books Name
*               example: title
*             author:
*               type: string
*               description: Authors name
*               example: author
*             publication_year:
*               type: integer
*               description: Year of publication
*               example: 2021
*     responses:
*       201:
*         description: Books added
*         schema:
*           type: object
*           properties:
*             message:
*               title: message
*               type: string
*               example: success
*       422:
*         description: Failed to add books
*         schema:
*           type: object
*           description: Books
*           properties:
*             message:
*               title: message
*               type: string
*               example: failed to add books
* /books/{id}:
*   put:
*     tags:
*       - Books
*     summary: Update Books by ID
*     security:
*       - bearerAuth: []
*     consumes:
*       - application/json
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: Books ID to update
*         type: string
*       - name: body
*         in: body
*         required: true
*         schema:
*           type: object
*           properties:
*             title:
*               type: string
*               description: Books Name
*               example: title
*             author:
*               type: string
*               description: Authors name
*               example: author
*             publication_year:
*               type: integer
*               description: Year of publication
*               example: 2021
*     responses:
*       200:
*         description: Books updated successfully
*         schema:
*           type: object
*           properties:
*             message:
*               title: message
*               type: string
*               example: success
*       404:
*         description: Books not found
*         schema:
*           type: object
*           properties:
*             message:
*               title: message
*               type: string
*               example: books not found
*       422:
*         description: Failed to update books
*         schema:
*           type: object
*           description: Books
*           properties:
*             message:
*               title: message
*               type: string
*               example: failed to update books
*   delete:
*     tags:
*       - Books
*     summary: To get delete by id
*     parameters:
*     - name: "id"
*       in: "path"
*       description: "Id of books to delete"
*       required: true
*       type: "string"
*     security:
*       - bearerAuth: []
*     consumes:
*       - application/json
*     responses:
*       200:
*         description: To delete books by id.
*         schema:
*           type: object
*           properties:
*       404:
*         description: Product
*         schema:
*           type: object
*           description: not found
*           properties:
*             message:
*               title: message
*               type: string
*               example: not found
*/
