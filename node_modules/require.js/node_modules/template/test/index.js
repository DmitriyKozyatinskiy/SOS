var tape = require("tape"),
    template = require("..");


tape("template(text[, data[, settings]])", function(assert) {
    var tmp = template("<p><%= text %></p>");

    assert.equals(tmp({
        text: "Hello World!"
    }), "<p>Hello World!</p>");

    assert.end();
});
