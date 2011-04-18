{
  src : "./lib", // the source dir of js files
  dest : "./", // the destination of your minified files
  compiledExtension : "min", // extension of the minified file
  runJslint : false, // if should run jsLint
  runGCompiler : false, // if should run GoogleCompiler
  keepCompiled : false, // if should keep the minified files
  order : ['loki-core.js'],
  aggregateTo : "Loki.js", // If a string is specified, all the .js will be aggregated to this file in the config.dest      
  debug : false // If in debug mode
}