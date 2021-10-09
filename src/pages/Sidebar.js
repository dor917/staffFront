import React from "react";
import '../css/bootstrap.min.css'
import '../css/sidebar.css'

function Sidebar() {
    return(
      <div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar" class="active">
        <ul class="list-unstyled components mb-5">
          <li class="active">
            <span class="fa fa-home"></span> Project1
          </li>
          <li>
              <span class="fa fa-user"></span> Project2
          </li>
          <li>
            <span class="fa fa-sticky-note"></span> Project3
          </li>
          <li>
            <span class="fa fa-cogs"></span> Project4
          </li>
          <li>
            <span class="fa fa-paper-plane"></span> Project5
          </li>
        </ul>
</nav>
       
		</div>




    );


}
export default Sidebar;