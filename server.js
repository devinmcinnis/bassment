// Generated by CoffeeScript 1.6.2
(function() {
  var app, express, http, path, routes;

  express = require("express");

  routes = require("./routes");

  http = require("http");

  path = require("path");

  app = express();

  app.configure(function() {
    app.set("port", process.env.PORT || 7000);
    app.set("views", "" + __dirname + "/views");
    app.set("view engine", "jade");
    app.use(express.logger("dev"));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    return app.use(express["static"](path.join(__dirname, "public/")));
  });

  if ("development" === app.get("env")) {
    app.configure("development", function() {
      return app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
      }));
    });
  }

  app.get("/", routes.index);

  http.createServer(app).listen(app.get("port"), function() {
    return console.log("Express server listening on port " + app.get("port"));
  });

}).call(this);
