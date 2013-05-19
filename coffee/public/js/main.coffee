requirejs.config(
  waitSeconds: 1
  "baseUrl": "js/"
  "paths":
    "jquery": ["//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min", "/libs/jquery-2.0.0.min.js"]
)

# Load the main app module to start the app
requirejs ["jquery"]