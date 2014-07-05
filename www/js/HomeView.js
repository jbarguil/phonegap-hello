var HomeView = function (service) {

    var employeeListView;

    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
        employeeListView = new EmployeeListView();
        this.render();
    };

    this.render = function () {
        this.$el.html(this.template());
        $('.content', this.$el).html(employeeListView.$el);
        return this;
    };

    this.findByName = function() {
        var query = $('.search-key').val();
        if (query === undefined)
            query = "";
        service.findByName(query).done(function (employees) {
            employeeListView.setEmployees(employees);
        });
    };

    this.initialize();

    this.findByName();

}