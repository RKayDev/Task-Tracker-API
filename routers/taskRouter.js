import taskController from "../controllers/taskController.js";


const taskRouter = (app) => {


    /**
     *  @swagger
     *  /api/tasks:
     *    post:
     *      summary: Create a new task
     *      requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                userid:
     *                  type: integer
     *                title:
     *                  type: string
     *                description:
     *                  type: string
     *      responses:
     *        200:
     *          description: The created task
     *          content:
     *            application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  id:
     *                    type: integer 
     *                  title:
     *                    type: string
     *                  description:    
     *                    type: string  
     */

    app.post("/api/tasks", taskController.createTask);

    /**
     * @swagger
     * /api/task/{id}:
     *   get:
     *     summary: Retrieve a task by ID
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         description: ID of the task
     *     responses:
     *       200:
     *         description: The task
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                 title:
     *                   type: string
     *                 description:
     *                   type: string
     *                 completed:
     *                   type: boolean
     */
    app.get("/api/task/:id", taskController.getTask);

    /**
 * @swagger
 * /api/tasks/{userid}:
 *   get:
 *     summary: Retrieve all tasks for a user
 *     parameters:
 *       - name: userid
 *         in: path
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: The tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:  
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   completed:
 *                     type: boolean
 */
    app.get("/api/tasks/:userid", taskController.getTasks);


    /**
     * @swagger
     * /api/tasks/{id}:
     *   put:
     *     summary: Update a task
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         description: ID of the task
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               title:
     *                 type: string
     *               description:
     *                 type: string
     *               completed:
     *                 type: string
     *     responses:
     *       200:
     *         description: The updated task
     */

    app.put("/api/tasks/:id", taskController.updateTask);

    /**
     * @swagger
     * /api/tasks/{id}:
     *   delete:
     *     summary: Delete a task
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         description: ID of the task
     *     responses:
     *       200:
     *         description: The deleted task
     */
    app.delete("/api/tasks/:id", taskController.deleteTask);
};

export default taskRouter;
