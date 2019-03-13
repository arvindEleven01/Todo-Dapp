pragma solidity ^0.4.25;

contract TodoList {

    uint public taskCount;

    Task[] public tasks;

    struct Task {
        uint _id;
        string _task;
        bool completed;
    }

    constructor() public {
        addTask("First task");
    }

    function addTask(string memory _text) public {
        taskCount += 1;
        tasks.push(Task(taskCount, _text, false));
    }

    function completedTask(uint _id) public {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
    }
}