import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.log('info', `✅️ Name: ${_options.name}`);
    _context.logger.log('info', `✅️ Path: ${_options.path}`);
    _context.logger.log('info', `✅️ Foo: ${_options.foo}`);
    return tree;
  };
}
