const TodoList = artifacts.require("TodoList");
const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
  deployer.deploy(Migrations);
};
