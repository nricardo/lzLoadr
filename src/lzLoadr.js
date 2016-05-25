'use strict';

// -- import external libs
import ocLazyLoad from 'oclazyload';

class lzLoadr {
  constructor($ocLazyLoadProvider) {
    this.$ocLazyLoadProvider = $ocLazyLoadProvider;
  }

  // handles configuration options
  config = (options) => {
    options = options || {};

    // normalize options
    options.debug = options.debug || false;

    // check if we want debug active
    this.$ocLazyLoadProvider.config({ debug: options.debug });
  }

  $get($ocLazyLoad) {
    return {
      load: (module) => {
        return $ocLazyLoad.load({
          name: module,
          files: [ 'js/'.concat(module, '.js') ]
        });
      }
    }
  }
}

// -- export module definition
export default angular.module('lzLoadr', [ocLazyLoad])
.provider('$lzLoadr', lzLoadr)
.name;
