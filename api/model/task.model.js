const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({ task: 'string', 
                assignee: 'string', 
                status: 'string', 
                createDate: 'date', 
                updatedDate: 'date', 
                createdBy: 'string', 
                updatedBy: 'string' },
                { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

const Task = mongoose.model('tasks', taskSchema);

module.exports = {
    Task
}