/*************************************************************
 *
 *  Copyright (c) 2017-2023 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/**
 * @fileoverview The bboldx package.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

import {Configuration} from '../../Configuration.js';
import './BboldxMappings.js';

/**
 * Configuration for the text macros of this package. They are automatically
 * available, when the textmacros package is loaded.
 */
Configuration.create('text-bboldx', {
  parser: 'text',
  handler: {
    macro: ['text-bboldx', 'text-bboldx-mathchar0miNormal', 'text-bboldx-delimiterNormal',
            'text-bboldx-mathchar0miBold', 'text-bboldx-delimiterBold'],
    delimiter: ['text-bboldx-delimiterNormal', 'text-bboldx-delimiterBold'],
  }
});

//
// Define the package configuration, including switches for light and always
// bold bb.
//
export const BboldxConfiguration = Configuration.create('bboldx', {
  handler: {
    macro: ['bboldx', 'bboldx-mathchar0miNormal', 'bboldx-delimiterNormal',
            'bboldx-mathchar0miBold', 'bboldx-delimiterBold'],
    delimiter: ['bboldx-delimiterNormal', 'bboldx-delimiterBold'],
  },
  options: {
    bboldx: {
      bfbb: false,
      light: false
    },
    // add text macros by default to textmacros
    textmacros: {
      packages: {'[+]': ['text-bboldx']}
    }
  }
});

