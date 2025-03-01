class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
<footer class="main-footer">
            <div class="auto-container">
                <!--Widgets Section-->
                <div class="widgets-section">
                    <div class="row clearfix">
                        <!--big column-->
                        <div class="big-column col-md-6 col-sm-12 col-xs-12">
                            <div class="row clearfix">
                                <!--Footer Column-->
                                <div class="footer-column col-md-7 col-sm-6 col-xs-12">
                                    <div class="footer-widget logo-widget">
                                        <div class="logo">
                                            <a href="index.html"><img src="images/footer-logo.png" alt="" /></a>
                                        </div>
                                        <div class="text">This prodigiously grew tortoise charact stupidly pernicious
                                            jeepers along while accordingly under useful much salacious walking fars
                                            before some supp aesthetically wow shuddered.</div>
                                        <ul class="social-icon-two">
                                            <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                            <li><a href="#"><span class="fa fa-facebook-square"></span></a></li>
                                            <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
                                            <li><a href="#"><span class="fa fa-youtube-play"></span></a></li>
                                            <li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <!--Footer Column-->
                                <div class="footer-column col-md-5 col-sm-6 col-xs-12">
                                    <div class="footer-widget links-widget">
                                        <h2>Web Links</h2>
                                        <ul class="links">
                                            <li><a href="index.html">Home Page</a></li>
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="services.html">Our Services</a></li>
                                            <li><a href="blog.html">Our News</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--big column-->
                        <div class="big-column col-md-6 col-sm-12 col-xs-12">
                            <div class="row clearfix">
                                <!--Footer Column-->
                                <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                                    <div class="footer-widget info-widget">
                                        <h2>Get In Touch</h2>
                                        <ul>
                                            <li><span class="icon fa fa-map-marker"></span>32 BellSouth, Harley Street
                                                <br> Florida 33968
                                            </li>
                                            <li>
                                                <span class="icon fa fa-phone"></span>
                                                <a href="tel:+12345678900">+(1) 234 567 8900 </a>
                                            </li>
                                            <li>
                                                <span class="icon fa fa-envelope"></span>
                                                <a href="mailto:support@Urban Hound.com"> support@Urban Hound.com </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!--Footer Column-->
                                <div class="footer-column col-md-6 col-sm-6 col-xs-12">
                                    <div class="footer-widget subscribe-widget">
                                        <h2>Subsrribe to RSS</h2>
                                        <div class="text">One jeepers along while do accord under useful much darn.
                                        </div>
                                        <div class="subscribe-form">
                                            <form method="post" action="contact.html">
                                                <div class="form-group">
                                                    <input type="email" name="email" value="" placeholder="Email"
                                                        required="">
                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" class="theme-btn btn-style-four">subscribe
                                                        now</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="copyright">Copyrights 2025 <span>Urban Hound</span> • All Rights Reserved.</div>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('dynamic-footer',Footer )