<?php # Login Form

if(isset($_GET['error'])) { 
   echo 'Error Logging In!';
}

# includes header.php
app_header();

?>

<div class="row">
    <h3>Login to <?php echo SITE_NAME; ?></h3>
</div><!-- end row -->
<div class="row">
    <div class="twelve columns">
        <?php
        # Check if form has been posted
        if ( isset( $errors ) && !empty( $errors ) ) 
        {
            # Call error messages
            echo '
                <div class="alert panel err_msg">';
                    echo '<p id="err_msg">Oops! There was a problem:<br/>';
                    foreach ( $errors as $msg ) {
                        echo "- $msg<br/>";
                    } // end foreach
                echo '</div>';
                    mysqli_close( $db );
            
        } // end if	
        ?>
    </div><!-- end twelve columns -->
</div><!-- end row -->
<form action="<?php echo ROOTURL; ?>process_login" method="POST" class="custom">
	<div class="row">
    	<div class="small-12 large-6 columns">
        	<label>Your Username or Email</label>
        	<input type="text" name="useroremail" value="<?php if ( isset( $_POST['useroremail'] ) ) echo $_POST['useroremail']; ?>" placeholder="tsmith" />
        </div><!-- end small-12 large-6 -->
    </div><!-- end row -->
    <div class="row">
    	<div class="small-12 large-6 columns">
            <label>Enter a password</label>
            <input type="password" name="pass" />
        </div><!-- end small-6 columns -->
    </div><!-- end row -->
    <div class="row">
    	<div class="small-12 columns">
    		<input type="submit" value="Login" class="primary button" onclick="formhash(this.form, this.form.password);" />
      	</div><!-- end small-12 columns -->
   	</div><!-- end row -->
</form>


<?php 
# includes header.php
app_footer(); ?>
