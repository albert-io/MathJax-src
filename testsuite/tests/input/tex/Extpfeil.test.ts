import { afterAll, beforeEach, describe, it } from '@jest/globals';
import { getTokens, toXmlMatch, setupTex, tex2mml, expectTexError } from '#helpers';
import '#js/input/tex/extpfeil/ExtpfeilConfiguration';

beforeEach(() => setupTex(['base', 'extpfeil']));

/**********************************************************************************/
/**********************************************************************************/

describe('Extpfeil', () => {

  /********************************************************************************/

  it('Xtwoheadrightarrow', () => {
    toXmlMatch(
      tex2mml('\\xtwoheadrightarrow{abcxyz}'),
      `<math xmlns="http://www.w3.org/1998/Math/MathML" data-latex="\\xtwoheadrightarrow{abcxyz}" display="block">
         <mrow data-mjx-texclass="REL" data-latex="\\xtwoheadrightarrow{abcxyz}">
           <mrow data-mjx-texclass="NONE"></mrow>
           <mover>
             <mo data-mjx-texclass="ORD">&#x21A0;</mo>
             <mpadded width="+1.556em" lspace="0.667em" voffset="-.2em" height="-.2em">
               <mi data-latex="a">a</mi>
               <mi data-latex="b">b</mi>
               <mi data-latex="c">c</mi>
               <mi data-latex="x">x</mi>
               <mi data-latex="y">y</mi>
               <mi data-latex="z">z</mi>
               <mspace depth=".2em"></mspace>
             </mpadded>
           </mover>
         </mrow>
       </math>`
    );
  });

  /********************************************************************************/

  it('Xtwoheadleftarrow', () => {
    toXmlMatch(
      tex2mml('\\xtwoheadleftarrow{abcxyz}'),
      `<math xmlns="http://www.w3.org/1998/Math/MathML" data-latex="\\xtwoheadleftarrow{abcxyz}" display="block">
         <mrow data-mjx-texclass="REL" data-latex="\\xtwoheadleftarrow{abcxyz}">
           <mrow data-mjx-texclass="NONE"></mrow>
           <mover>
             <mo data-mjx-texclass="ORD">&#x219E;</mo>
             <mpadded width="+1.667em" lspace="0.944em" voffset="-.2em" height="-.2em">
               <mi data-latex="a">a</mi>
               <mi data-latex="b">b</mi>
               <mi data-latex="c">c</mi>
               <mi data-latex="x">x</mi>
               <mi data-latex="y">y</mi>
               <mi data-latex="z">z</mi>
               <mspace depth=".2em"></mspace>
             </mpadded>
           </mover>
         </mrow>
       </math>`
    );
  });

  /********************************************************************************/

  it('Xmapsto', () => {
    toXmlMatch(
      tex2mml('\\xmapsto{abcxyz}'),
      `<math xmlns="http://www.w3.org/1998/Math/MathML" data-latex="\\xmapsto{abcxyz}" display="block">
         <mrow data-mjx-texclass="REL" data-latex="\\xmapsto{abcxyz}">
           <mrow data-mjx-texclass="NONE"></mrow>
           <mover>
             <mo data-mjx-texclass="ORD">&#x21A6;</mo>
             <mpadded width="+0.722em" lspace="0.333em" voffset="-.2em" height="-.2em">
               <mi data-latex="a">a</mi>
               <mi data-latex="b">b</mi>
               <mi data-latex="c">c</mi>
               <mi data-latex="x">x</mi>
               <mi data-latex="y">y</mi>
               <mi data-latex="z">z</mi>
               <mspace depth=".2em"></mspace>
             </mpadded>
           </mover>
         </mrow>
       </math>`
    );
  });

  /********************************************************************************/

  it('Xlongequal', () => {
    toXmlMatch(
      tex2mml('\\xlongequal{abcxyz}'),
      `<math xmlns="http://www.w3.org/1998/Math/MathML" data-latex="\\xlongequal{abcxyz}" display="block">
         <mrow data-mjx-texclass="REL" data-latex="\\xlongequal{abcxyz}">
           <mrow data-mjx-texclass="NONE"></mrow>
           <mover>
             <mo data-mjx-texclass="ORD" stretchy="true">=</mo>
             <mpadded width="+0.778em" lspace="0.389em" voffset="-.2em" height="-.2em">
               <mi data-latex="a">a</mi>
               <mi data-latex="b">b</mi>
               <mi data-latex="c">c</mi>
               <mi data-latex="x">x</mi>
               <mi data-latex="y">y</mi>
               <mi data-latex="z">z</mi>
               <mspace depth=".2em"></mspace>
             </mpadded>
           </mover>
         </mrow>
       </math>`
    );
  });

  /********************************************************************************/

  it('Xtofrom', () => {
    toXmlMatch(
      tex2mml('\\xtofrom{abcxyz}'),
      `<math xmlns="http://www.w3.org/1998/Math/MathML" data-latex="\\xtofrom{abcxyz}" display="block">
         <mrow data-mjx-texclass="REL" data-latex="\\xtofrom{abcxyz}">
           <mrow data-mjx-texclass="NONE"></mrow>
           <mover>
             <mo data-mjx-texclass="ORD">&#x21C4;</mo>
             <mpadded width="+1.333em" lspace="0.667em" voffset="-.2em" height="-.2em">
               <mi data-latex="a">a</mi>
               <mi data-latex="b">b</mi>
               <mi data-latex="c">c</mi>
               <mi data-latex="x">x</mi>
               <mi data-latex="y">y</mi>
               <mi data-latex="z">z</mi>
               <mspace depth=".2em"></mspace>
             </mpadded>
           </mover>
         </mrow>
       </math>`
    );
  });

  /********************************************************************************/

  it('Newextarrow', () => {
    toXmlMatch(
      tex2mml('\\Newextarrow{\\ab}{10,20}{8672}\\ab{xyz}'),
      `<math xmlns="http://www.w3.org/1998/Math/MathML" data-latex="\\Newextarrow{\\ab}{10,20}{8672}\\ab{xyz}" display="block">
         <mrow data-mjx-texclass="REL" data-latex="\\Newextarrow{\\ab}{10,20}{8672}\\ab{xyz}">
           <mrow data-mjx-texclass="NONE"></mrow>
           <mover>
             <mo data-mjx-texclass="ORD">&#x21E0;</mo>
             <mpadded width="+1.667em" lspace="0.556em" voffset="-.2em" height="-.2em">
               <mi data-latex="x">x</mi>
               <mi data-latex="y">y</mi>
               <mi data-latex="z">z</mi>
               <mspace depth=".2em"></mspace>
             </mpadded>
           </mover>
         </mrow>
       </math>`
    );
  });

  /********************************************************************************/

});

/**********************************************************************************/
/**********************************************************************************/

describe('Extpfeil Errors', () => {

  /********************************************************************************/

  it('NewextarrowArg1', () => {
    expectTexError('\\Newextarrow{ab}{10,20}{8672}\\ab{xyz}')
      .toBe('First argument to \\Newextarrow must be a control sequence name');
  });

  /********************************************************************************/

  it('NewextarrowArg2 One', () => {
    expectTexError('\\Newextarrow{\\ab}{10}{8672}\\ab{xyz}')
      .toBe('Second argument to \\Newextarrow must be two integers separated by a comma');
  });

  /********************************************************************************/

  it('NewextarrowArg2 Two', () => {
    expectTexError('\\Newextarrow{\\ab}{10 20}{8672}\\ab{xyz}')
      .toBe('Second argument to \\Newextarrow must be two integers separated by a comma');
  });

  /********************************************************************************/

  it('NewextarrowArg2 Three', () => {
    expectTexError('\\Newextarrow{\\ab}{aa}{8672}\\ab{xyz}')
      .toBe('Second argument to \\Newextarrow must be two integers separated by a comma');
  });

  /********************************************************************************/

  it('NewextarrowArg3', () => {
    expectTexError('\\Newextarrow{\\ab}{10,20}{AG}\\ab{xyz}')
      .toBe('Third argument to \\Newextarrow must be a unicode character number');
  });

  /********************************************************************************/

});

/**********************************************************************************/
/**********************************************************************************/

afterAll(() => getTokens('extpfeil'));
