angular.module('schemaForm')
.config(['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var ckeditor = function(name, schema, options) {
      if (schema.type === 'string' && schema.format === 'ckeditor') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'ckeditor';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(ckeditor);

    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'ckeditor',
      'directives/decorators/bootstrap/ckeditor/ckeditor.html'
    );
    schemaFormDecoratorsProvider.createDirective(
      'ckeditor',
      'directives/decorators/bootstrap/ckeditor/ckeditor.html'
    );
  }
]);