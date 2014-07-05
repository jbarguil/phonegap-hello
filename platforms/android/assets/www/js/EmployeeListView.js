var EmployeeListView = function () {

    var employees;

    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.render();
    };

    this.setEmployees = function(list) {
        employees = list;
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template(employees));
        return this;
    };

    this.initialize();

}