<?php /* Template Name: Marketing */
get_header(); ?>
 
  <!-- Navigation -->

  <nav class="top-bar">
    <ul class="title-area">
      <!-- Title Area -->
      <li class="name">
        <h1>
          <a href="#">
            Top Bar Title
          </a>
        </h1>
      </li>
      <li class="toggle-topbar menu-icon"><a href="#"><span>menu</span></a></li>
    </ul>
 
    <section class="top-bar-section">
      <!-- Right Nav Section -->
      <ul class="right">
        <li class="divider"></li>
        <li class="has-dropdown">
          <a href="#">Main Item 1</a>
          <ul class="dropdown">
            <li><label>Section Name</label></li>
            <li class="has-dropdown">
              <a href="#" class="">Has Dropdown, Level 1</a>
              <ul class="dropdown">
                <li><a href="#">Dropdown Options</a></li>
                <li><a href="#">Dropdown Options</a></li>
                <li><a href="#">Level 2</a></li>
                <li><a href="#">Subdropdown Option</a></li>
                <li><a href="#">Subdropdown Option</a></li>
                <li><a href="#">Subdropdown Option</a></li>
              </ul>
            </li>
            <li><a href="#">Dropdown Option</a></li>
            <li><a href="#">Dropdown Option</a></li>
            <li class="divider"></li>
            <li><label>Section Name</label></li>
            <li><a href="#">Dropdown Option</a></li>
            <li><a href="#">Dropdown Option</a></li>
            <li><a href="#">Dropdown Option</a></li>
            <li class="divider"></li>
            <li><a href="#">See all &rarr;</a></li>
          </ul>
        </li>
        <li class="divider"></li>
        <li><a href="#">Main Item 2</a></li>
        <li class="divider"></li>
        <li class="has-dropdown">
          <a href="#">Main Item 3</a>
          <ul class="dropdown">
            <li><a href="#">Dropdown Option</a></li>
            <li><a href="#">Dropdown Option</a></li>
            <li><a href="#">Dropdown Option</a></li>
            <li class="divider"></li>
            <li><a href="#">See all &rarr;</a></li>
          </ul>
        </li>
      </ul>
    </section>
  </nav>
 
  <!-- End Top Bar -->

  <div class="row">
    <div class="large-12 columns">

    <!-- Content Slider -->

      <div class="row">
        <div class="large-12 hide-for-small">

          <div id="featured">
              <img src="http://placehold.it/1200x500&text=Slide Image" alt="slide image">
              <!-- <img src="http://placehold.it/1200x500&text=Slide Image" alt="slide image">
              <img src="http://placehold.it/1200x500&text=Slide Image" alt="slide image"> -->
            </div>

      </div>
    </div>

    <!-- End Content Slider -->

    <!-- Mobile Header -->

      <div class="row">
        <div class="large-12 columns show-for-small">

          <img src="http://placehold.it/1200x700&text=Mobile Header">

        </div>
      </div><br>

    <!-- End Mobile Header -->


      <div class="row">
        <div class="large-12 columns">
          <div class="row">
            <!-- Shows -->
            <div class="large-4 small-6 columns">

              <h4>Upcoming Shows</h4><hr>

              <div class="row">
                <div class="large-1 column">
                  <img src="http://placehold.it/50x50&amp;text=[img]">
                </div>

                <div class="large-9 columns">
                  <h5><a href="#">Venue Name</a></h5>
                  <h6 class="subheader show-for-small">Doors at 00:00pm</h6>
                </div>
              </div><hr>

              <div class="hide-for-small">
                <div class="row">
                  <div class="large-1 column">
                    <img src="http://placehold.it/50x50&amp;text=[img]">
                  </div>

                  <div class="large-9 columns">
                    <h5 class="subheader"><a href="#">Venue Name</a></h5>
                  </div>
                </div><hr>

                <div class="row">
                  <div class="large-1 column">
                    <img src="http://placehold.it/50x50&amp;text=[img]">
                  </div>

                  <div class="large-9 columns">
                    <h5 class="subheader"><a href="#">Venue Name</a></h5>
                  </div>
                </div><hr>

                <div class="row">
                  <div class="large-1 column">
                    <img src="http://placehold.it/50x50&amp;text=[img]">
                  </div>

                  <div class="large-9 columns">
                    <h5 class="subheader"><a href="#">Venue Name</a></h5>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Shows -->


            <!-- Image -->

            <div class="large-4 small-6 columns">
              <img src="http://placehold.it/300x465&amp;text=Image">
            </div>

            <!-- End Image -->


            <!-- Feed -->

            <div class="large-4 small-12 columns">

              <h4>Blog</h4><hr>
              <div class="panel">
                <h5><a href="#">Post Title 1</a></h5>

                <h6 class="subheader">
                  Risus ligula, aliquam nec fermentum vitae, sollicitudin eget urna. Suspendisse ultrices ornare tempor...
                </h6>

                <h6><a href="#">Read More »</a></h6>
              </div>

              <div class="panel hide-for-small">
                <h5><a href="#">Post Title 2 »</a></h5>
              </div>

              <div class="panel hide-for-small">
                <h5><a href="#">Post Title 3 »</a></h5>
              </div>

              <a href="#" class="right">Go To Blog »</a>

            </div>

            <!-- End Feed -->

          </div>
        </div>
      </div>

    <!-- End Content -->


    <!-- Footer -->

      <footer class="row">
        <div class="large-12 columns"><hr>
            <div class="row">

              <div class="large-6 columns">
                  <p>&copy; Copyright no one at all. Go to town.</p>
              </div>

              <div class="large-6 small-12 columns">
                  <ul class="inline-list right">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                    <li><a href="#">Link 4</a></li>
                  </ul>
              </div>

            </div>
        </div>
      </footer>

    <!-- End Footer -->

    </div>
  </div>
  
<?php get_footer(); ?>