const route = (app) => {

    const DeptController = require('../Controller/deptController');

    app.post('/department',DeptController.addDept);
    app.get('/department',DeptController.getAlldept);
    app.put('/department/:id',DeptController.updateDept);
    app.delete('department/:did',DeptController.deleteDept)

}
module.exports = route;