import React from 'react';
import "../js/CodeView.fileRead.js"
import "../css/CodeView.css"

function CodeView() {
   return (
      <div className="codeview-contaniar">
         <table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip>
            <tbody>
               <tr>
                  <td id="L1" class="blob-num js-line-number" data-line-number="1">1</td>
                  <td id="LC1" class="blob-code blob-code-inner js-file-line">code</td>
               </tr>

               <tr>
                  <td id="L2" class="blob-num js-line-number" data-line-number="2">2</td>
                  <td id="LC2" class="blob-code blob-code-inner js-file-line">code</td>
               </tr>

               <tr>
                  <td id="L3" class="blob-num js-line-number" data-line-number="3">3</td>
                  <td id="LC3" class="blob-code blob-code-inner js-file-line">code</td>
               </tr>

               <tr>
                  <td id="L4" class="blob-num js-line-number" data-line-number="4">4</td>
                  <td id="LC4" class="blob-code blob-code-inner js-file-line">code</td>
               </tr>

               <tr>
                  <td id="L5" class="blob-num js-line-number" data-line-number="5">5</td>
                  <td id="LC5" class="blob-code blob-code-inner js-file-line">code</td>
               </tr>

               <tr>
                  <td id="L6" class="blob-num js-line-number" data-line-number="6">6</td>
                  <td id="LC6" class="blob-code blob-code-inner js-file-line">code</td>
               </tr>

               <tr>
                  <td id="L7" class="blob-num js-line-number" data-line-number="7">7</td>
                  <td id="LC7" class="blob-code blob-code-inner js-file-line">code</td>
               </tr>

               <tr>
                  <td id="L8" class="blob-num js-line-number" data-line-number="8">8</td>
                  <td id="LC8" class="blob-code blob-code-inner js-file-line">code</td>
               </tr>

               <tr>
                  <td id="L9" class="blob-num js-line-number" data-line-number="9">9</td>
                  <td id="LC9" class="blob-code blob-code-inner js-file-line">code</td>
               </tr>

               <tr>
                  <td id="L10" class="blob-num js-line-number" data-line-number="10">10</td>
                  <td id="LC10" class="blob-code blob-code-inner js-file-line"> code</td>
               </tr>
               

               
            </tbody>
         </table>
     </div>
   );
}
export default CodeView;
