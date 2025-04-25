import taskRouter from "./taskRouter.js";

import swagger from "../logic/swagger.js";

const mainRouter = (app) => {
    taskRouter(app);
    swagger.serve(app);
};

export default mainRouter;



