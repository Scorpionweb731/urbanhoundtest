class Header extends HTMLElement{
    connectedCallback(){
        const TitleName = this.getAttribute('titlename');
        const TitleLink = this.getAttribute('titlelink');
        this.innerHTML = `
        <header class="main-header">
    <div class="header-top">
        <div class="auto-container">
            <div class="top-inner">
                <div class="clearfix">
                    <div class="top-left">
                        <ul class="clearfix">
                            <li><span class="icon flaticon-map-marker"></span>Jabalpur Madhya Pradesh 482001</li>
                            <li>
                                <a href="tel:+12345678900">
                                    <span class="icon flaticon-telephone-handle-silhouette"></span>
                                    +(91) 1234567890
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@abc.com">
                                    <span class="icon fa fa-envelope"></span>
                                     support@abc.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="top-right clearfix">
                        <div class="donate-box"><a href="${TitleLink || './login.html'}"
                            class="theme-btn btn-style-one">${TitleName || 'Login'}</a>
                    </div>
                        <div class="social-icon">
                            <ul class="clearfix">
                                <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                <li><a href="#"><span class="fa fa-facebook-square"></span></a></li>
                                <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
                                <li><a href="#"><span class="fa fa-youtube-play"></span></a></li>
                                <li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header-upper">
        <div class="auto-container clearfix">
            <div class="pull-left logo-outer">
                <div class="logo"><a href="index.html">
                    <img src="./images/logo.png" alt="" title=""></a></div>
            </div>
            <div class="pull-right upper-right clearfix">
                <div class="nav-outer clearfix">
                    <nav class="main-menu">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-bs-toggle="collapse"
                                data-bs-target=".navbar-collapse">
                                <span><i class="fa fa-bars"></i></span>
                            </button>
                        </div>
                        <div class="navbar-collapse collapse clearfix">
                            <ul class="navigation clearfix">
                                <li class="current dropdown"><a href="/">Home</a>
                                </li>
                                <li class="dropdown"><a href="./about.html">About</a></li>
                                <li class="dropdown"><a href="./services.html">Services</a>
                                  
                                </li>
                               
                                <li class="dropdown"><a href="./blog.html">Blog</a>
                                   
                                </li>
                                <li class="dropdown"><a href="./contact.html">Contact</a>
                                 
                                </li>
                                <li class="dropdown"><a href="./shop.html">Shop</a>
                                  
                                </li>
                                <li class="dropdown"><a href="./cart.html"><i class="icon flaticon-shopping-bag-3 fs-4"></i></a>
                                  
                                </li>
                                
                            </ul>
                        </div>
                    </nav>


                    <div class="outer-box">
                        <div class="search-box-outer">
                            <div class="dropdown">
                                <button class="search-box-btn" type="button" id="dropdownMenu3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="fa fa-search"></span></button>
                                <ul class="dropdown-menu pull-right search-panel menu-search" aria-labelledby="dropdownMenu3">
                                    <li class="panel-outer">
                                        <div class="form-container">
                                            <form method="post" action="./blog.html">
                                                <div class="form-group">
                                                    <input type="search" name="field-name" value=""
                                                        placeholder="Search Here" required>
                                                    <button type="submit" class="search-btn"><span
                                                            class="fa fa-search"></span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="sticky-header">
        <div class="auto-container clearfix">
            <div class="logo pull-left">
                <a href="./index.html" class="img-responsive"><img src="./images/logo-small.png" alt=""
                        title=""></a>
            </div>
            <div class="right-col pull-right">
                <nav class="main-menu">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="navbar-collapse collapse clearfix">
                        <ul class="navigation clearfix">
                            <li class="current dropdown"><a href="/">Home</a>
                              
                            </li>
                            <li class="dropdown"><a href="./about.html">About</a>
                                
                            </li>
                            <li class="dropdown"><a href="./services.html">Services</a>
                            
                            </li>
                            
                            <li class="dropdown"><a href="./Blog.html">Blog</a>
                              
                            </li>
                            <li class="dropdown"><a href="./contact.html">Contact</a>
                             
                            </li>
                            <li class="dropdown"><a href="./shop.html">Shop</a>
                               
                            </li>
                            <li class="dropdown"><a href="./cart.html"><i class="icon flaticon-shopping-bag-3 fs-4"></i></a>
                               
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header> `
    }
}

customElements.define('dynamic-header',Header )












