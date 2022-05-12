import React from 'react';
import '../js/CodeView.fileRead.js';
import '../css/CodeView.css';
import FileList from './FileList.js';
import { applyStyles } from '@popperjs/core';



function CodeView(props){
   // CodeView.defaultProps = {
   //    contents: ''
      
   // }
   const codeContent = ["src", "asdf", "kfdg", "sdfag", "qwrqwt", "asfgg", "asdf", "qwrtt", "qethh", "sdklgjkl", "asdjgkd", "sjdfkjg", "asdgjw", "asjgjep", "ajsdigje"];
   const codeContents = ["asdf", "hgdsfjh", "asfdhjkl", "ssjtasdf", "oiuiouo", "werhth", "cvnn", "hjhjr", "sfoijhoi", "hjqwf", "sfhrhr", "hjkd", "jyjwer", "oijhoi", "ofjre"]

   const render = () => {
   const result = [];
      for (let i = 0; i < codeContent.length; i++) {
      result.push(
         <tr>
            <td
               id="L1"
               className="blob-num js-line-number"
               data-line-number="1"
            >
               <span key={i}>{i+1 + "  "}</span>
            </td>
            <td
               id="LC1"
               className="blob-code blob-code-inner js-file-line"
            >
               <span key={i}>{codeContent[i] + "  "}</span>
            </td>
         </tr>
      );
      }
   return result;
   };

   return (
      <div
         data-target="readme-toc.content"
         className="Box mt-3 position-relative"
      >
         <div className="Box-header py-2 pr-2 d-flex flex-shrink-0 flex-md-row flex-items-center">
            <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1">
               138 lines (126 sloc)
               <span class="slash">|</span>
                  <span class="file-info-divider"></span>
                  6.19 KB
            </div>
         </div>
            <div class="js-check-bidi blob-code-content">
               <table
                  className="highlight tab-size js-file-line-container"
                  data-tab-size="8"
                  data-paste-markdown-skip
               >
                  <tbody>
                  {render()}
                  </tbody>
               </table>
         </div>
      </div>
   );
   
}


   
export default CodeView;
