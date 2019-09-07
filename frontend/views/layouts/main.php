<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600&amp;subset=latin-ext" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>



<div class="wrapper">
    <div class="wrapper">



        <!--Use class "navbar-fixed" or "navbar-default" -->
        <!--If you use "navbar-fixed" it will be sticky menu on scroll (only for large screens)-->

        <!-- ======================== Navigation ======================== -->

        <nav class="navbar-fixed navbar-sticked">

            <div class="container">

                <!-- ==========  Top navigation ========== -->

                <div class="navigation navigation-top clearfix">
                    <ul>
                        <!--add active class for current page-->

                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube"></i></a></li>

                        <!--Currency selector-->

                        <li class="nav-settings">
                            <a href="#" class="nav-settings-value"> USD $</a>
                            <ul class="nav-settings-list">
                                <li>USD $</li>
                                <li>EUR €</li>

                            </ul>
                        </li>

                        <!--Language selector-->

                        <li class="nav-settings">
                            <a href="#" class="nav-settings-value"> ENG</a>
                            <ul class="nav-settings-list">
                                <li>ENG</li>
                                <li>RUS</li>

                            </ul>
                        </li>
                        <li><a href="#" class="open-login"><i class="icon icon-user"></i></a></li>
                        <li><a href="#" class="open-search"><i class="icon icon-magnifier"></i></a></li>
                        <li><a href="#" class="open-cart"><i class="icon icon-cart"></i> <span>3</span></a></li>
                    </ul>
                </div> <!--/navigation-top-->

                <!-- ==========  Main navigation ========== -->

                <div class="navigation navigation-main">

                    <!-- Setup your logo here-->

                    <a href="index.html" class="logo"><img src="/images/logo.png" alt=""></a>

                    <!-- Mobile toggle menu -->

                    <a href="#" class="open-menu"><i class="icon icon-menu"></i></a>

                    <!-- Convertible menu (mobile/desktop)-->

                    <div class="floating-menu">

                        <!-- Mobile toggle menu trigger-->

                        <div class="close-menu-wrapper">
                            <span class="close-menu"><i class="icon icon-cross"></i></span>
                        </div>

                        <ul>
                            <li><a href="index.html">Home</a></li>

                            <!-- Multi-content dropdown -->

                            <li><a href="/about">About</a></li>

                            <!-- Single dropdown-->



                            <!-- Furniture icons in dropdown-->

                            <li>
                                <a href="/">Catalog <span class="open-dropdown"><i class="fa fa-angle-down"></i></span></a>
                                <div class="navbar-dropdown">
                                    <div class="navbar-box">

                                        <!-- box-1 (left-side)-->

                                        <div class="box-1">
                                            <div class="image">
                                                <img src="/images/blog-2.jpg" alt="Lorem ipsum">
                                            </div>
                                            <div class="box">
                                                <div class="h2">Best ideas</div>
                                                <div class="clearfix">
                                                    <p>Homes that differ in terms of style, concept and architectural solutions have been furnished by Furniture Factory. These spaces tell of an international lifestyle that expresses modernity, research and a creative spirit.</p>
                                                    <a class="btn btn-clean btn-big" href="ideas.html">Explore</a>
                                                </div>
                                            </div>
                                        </div> <!--/box-1-->

                                        <!-- box-2 (right-side)-->

                                        <div class="box-2">
                                            <div class="clearfix categories">
                                                <div class="row">

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-sofa"></i>
                                                                <figcaption>Sofa</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-armchair"></i>
                                                                <figcaption>Armchairs</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-chair"></i>
                                                                <figcaption>Chairs</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-dining-table"></i>
                                                                <figcaption>Dining tables</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-media-cabinet"></i>
                                                                <figcaption>Media storage</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-table"></i>
                                                                <figcaption>Tables</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-bookcase"></i>
                                                                <figcaption>Bookcase</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-bedroom"></i>
                                                                <figcaption>Bedroom</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-nightstand"></i>
                                                                <figcaption>Nightstand</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-children-room"></i>
                                                                <figcaption>Children room</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-kitchen"></i>
                                                                <figcaption>Kitchen</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-bathroom"></i>
                                                                <figcaption>Bathroom</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-wardrobe"></i>
                                                                <figcaption>Wardrobe</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-shoe-cabinet"></i>
                                                                <figcaption>Shoe cabinet</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-office"></i>
                                                                <figcaption>Office</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-bar-set"></i>
                                                                <figcaption>Bar sets</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-lightning"></i>
                                                                <figcaption>Lightning</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>

                                                    <!--icon item-->

                                                    <div class="col-sm-3 col-xs-6">
                                                        <a href="#">
                                                            <figure>
                                                                <i class="f-icon f-icon-carpet"></i>
                                                                <figcaption>Carpet</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                </div> <!--/row-->
                                            </div> <!--/categories-->
                                        </div> <!--/box-2-->
                                    </div> <!--/navbar-box-->
                                </div> <!--/navbar-dropdown-->
                            </li>

                            <!-- Mega menu dropdown -->



                            <!-- Simple menu link-->
                            <li><a href="/contact">Portfolio</a></li>
                            <li><a href="/contact">Contact</a></li>

                        </ul>
                    </div> <!--/floating-menu-->
                </div> <!--/navigation-main-->

                <!-- ==========  Search wrapper ========== -->

                <div class="search-wrapper">

                    <!-- Search form -->
                    <input class="form-control" placeholder="Search...">
                    <button class="btn btn-main btn-search">Go!</button>

                    <!-- Search results - live search -->
                    <div class="search-results">
                        <div class="search-result-items">
                            <div class="title h4">Products <a href="#" class="btn btn-clean-dark btn-xs">View all</a></div>
                            <ul>
                                <li><a href="#"><span class="id">42563</span> <span class="name">Green corner</span> <span class="category">Sofa</span></a></li>
                                <li><a href="#"><span class="id">42563</span> <span class="name">Laura</span> <span class="category">Armchairs</span></a></li>
                                <li><a href="#"><span class="id">42563</span> <span class="name">Nude</span> <span class="category">Dining tables</span></a></li>
                                <li><a href="#"><span class="id">42563</span> <span class="name">Aurora</span> <span class="category">Nightstands</span></a></li>
                                <li><a href="#"><span class="id">42563</span> <span class="name">Dining set</span> <span class="category">Kitchen</span></a></li>
                                <li><a href="#"><span class="id">42563</span> <span class="name">Seat chair</span> <span class="category">Bar sets</span></a></li>
                            </ul>
                        </div> <!--/search-result-items-->
                        <div class="search-result-items">
                            <div class="title h4">Blog <a href="#" class="btn btn-clean-dark btn-xs">View all</a></div>
                            <ul>
                                <li><a href="#"><span class="id">01 Jan</span> <span class="name">Creating the Perfect Gallery Wall </span> <span class="category">Interior ideas</span></a></li>
                                <li><a href="#"><span class="id">12 Jan</span> <span class="name">Making the Most Out of Your Kids Old Bedroom</span> <span class="category">Interior ideas</span></a></li>
                                <li><a href="#"><span class="id">28 Dec</span> <span class="name">Have a look at our new projects!</span> <span class="category">Modern design</span></a></li>
                                <li><a href="#"><span class="id">31 Sep</span> <span class="name">Decorating When You're Starting Out or Starting Over</span> <span class="category">Best of 2017</span></a></li>
                                <li><a href="#"><span class="id">22 Sep</span> <span class="name">The 3 Tricks that Quickly Became Rules</span> <span class="category">Tips for you</span></a></li>
                            </ul>
                        </div> <!--/search-result-items-->
                    </div> <!--/search-results-->
                </div>

                <!-- ==========  Login wrapper ========== -->

                <div class="login-wrapper">
                    <form>
                        <div class="h4">Sign in</div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <a href="#forgotpassword" class="open-popup">Forgot password?</a>
                            <a href="#createaccount" class="open-popup">Don't have an account?</a>
                        </div>
                        <button type="submit" class="btn btn-block btn-main">Submit</button>
                    </form>
                </div>

                <!-- ==========  Cart wrapper ========== -->

                <div class="cart-wrapper">
                    <div class="checkout">
                        <div class="clearfix">

                            <!--cart item-->

                            <div class="row">

                                <div class="cart-block cart-block-item clearfix">
                                    <div class="image">
                                        <a href="product.html"><img src="/images/product-1.jpg" alt=""></a>
                                    </div>
                                    <div class="title">
                                        <div><a href="product.html">Green corner</a></div>
                                        <small>Green corner</small>
                                    </div>
                                    <div class="quantity">
                                        <input type="number" value="2" class="form-control form-quantity">
                                    </div>
                                    <div class="price">
                                        <span class="final">$ 1.998</span>
                                        <span class="discount">$ 2.666</span>
                                    </div>
                                    <!--delete-this-item-->
                                    <span class="icon icon-cross icon-delete"></span>
                                </div>

                                <!--cart item-->

                                <div class="cart-block cart-block-item clearfix">
                                    <div class="image">
                                        <a href="product.html"><img src="/images/product-2.png" alt=""></a>
                                    </div>
                                    <div class="title">
                                        <div><a href="product.html">Green corner</a></div>
                                        <small>Green corner</small>
                                    </div>
                                    <div class="quantity">
                                        <input type="number" value="2" class="form-control form-quantity">
                                    </div>
                                    <div class="price">
                                        <span class="final">$ 1.998</span>
                                        <span class="discount">$ 2.666</span>
                                    </div>
                                    <!--delete-this-item-->
                                    <span class="icon icon-cross icon-delete"></span>
                                </div>

                                <!--cart item-->

                                <div class="cart-block cart-block-item clearfix">
                                    <div class="image">
                                        <a href="product.html"><img src="/images/product-3.png" alt=""></a>
                                    </div>
                                    <div class="title">
                                        <div><a href="product.html">Green corner</a></div>
                                        <small>Green corner</small>
                                    </div>
                                    <div class="quantity">
                                        <input type="number" value="2" class="form-control form-quantity">
                                    </div>
                                    <div class="price">
                                        <span class="final">$ 1.998</span>
                                        <span class="discount">$ 2.666</span>
                                    </div>
                                    <!--delete-this-item-->
                                    <span class="icon icon-cross icon-delete"></span>
                                </div>

                                <!--cart item-->

                                <div class="cart-block cart-block-item clearfix">
                                    <div class="image">
                                        <a href="product.html"><img src="/images/product-4.png" alt=""></a>
                                    </div>
                                    <div class="title">
                                        <div><a href="product.html">Green corner</a></div>
                                        <small>Green corner</small>
                                    </div>
                                    <div class="quantity">
                                        <input type="number" value="2" class="form-control form-quantity">
                                    </div>
                                    <div class="price">
                                        <span class="final">$ 1.998</span>
                                        <span class="discount">$ 2.666</span>
                                    </div>
                                    <!--delete-this-item-->
                                    <span class="icon icon-cross icon-delete"></span>
                                </div>
                            </div>

                            <hr>

                            <!--cart prices -->

                            <div class="clearfix">
                                <div class="cart-block cart-block-footer clearfix">
                                    <div>
                                        <strong>Discount 15%</strong>
                                    </div>
                                    <div>
                                        <span>$ 159,00</span>
                                    </div>
                                </div>

                                <div class="cart-block cart-block-footer clearfix">
                                    <div>
                                        <strong>Shipping</strong>
                                    </div>
                                    <div>
                                        <span>$ 30,00</span>
                                    </div>
                                </div>

                                <div class="cart-block cart-block-footer clearfix">
                                    <div>
                                        <strong>VAT</strong>
                                    </div>
                                    <div>
                                        <span>$ 59,00</span>
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <!--cart final price -->

                            <div class="clearfix">
                                <div class="cart-block cart-block-footer clearfix">
                                    <div>
                                        <strong>Total</strong>
                                    </div>
                                    <div>
                                        <div class="h4 title">$ 1259,00</div>
                                    </div>
                                </div>
                            </div>


                            <!--cart navigation -->

                            <div class="cart-block-buttons clearfix">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <a href="products-grid.html" class="btn btn-clean-dark">Continue shopping</a>
                                    </div>
                                    <div class="col-xs-6 text-right">
                                        <a href="checkout-1.html" class="btn btn-main"><span class="icon icon-cart"></span> Checkout</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> <!--/checkout-->
                </div> <!--/cart-wrapper-->
            </div> <!--/container-->
        </nav>
    </div>


    <!-- ========================  Header content ======================== -->

<?php echo $content;?>
    <!-- ========================  Instagram ======================== -->

    <section class="instagram">

        <!-- === instagram header === -->

        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-2 col-md-8 text-center">
                        <h2 class="h2 title">Follow us <i class="fa fa-instagram fa-2x"></i> Instagram </h2>
                        <div class="text">
                            <p>@InstaFurnitureFactory</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- === instagram gallery === -->

        <div class="gallery clearfix">
            <a class="item" href="index.html#">
                <img src="/images/square-1.jpg" alt="Alternate Text" />
            </a>
            <a class="item" href="index.html#">
                <img src="/images/square-2.jpg" alt="Alternate Text" />
            </a>
            <a class="item" href="index.html#">
                <img src="/images/square-3.jpg" alt="Alternate Text" />
            </a>
            <a class="item" href="index.html#">
                <img src="/images/square-4.jpg" alt="Alternate Text" />
            </a>
            <a class="item" href="index.html#">
                <img src="/images/square-5.jpg" alt="Alternate Text" />
            </a>
            <a class="item" href="index.html#">
                <img src="/images/square-6.jpg" alt="Alternate Text" />
            </a>

        </div> <!--/gallery-->

    </section>

    <footer>
        <div class="container">

            <!--footer showroom-->
            <div class="footer-showroom">
                <div class="row">
                    <div class="col-sm-8">
                        <h2>Visit our showroom</h2>
                        <p>200 12th Ave, New York, NY 10001, USA</p>
                        <p>Mon - Sat: 10 am - 6 pm &nbsp; &nbsp; | &nbsp; &nbsp; Sun: 12pm - 2 pm</p>
                    </div>
                    <div class="col-sm-4 text-center">
                        <a href="#" class="btn btn-clean"><span class="icon icon-map-marker"></span> Get directions</a>
                        <div class="call-us h4"><span class="icon icon-phone-handset"></span> 333.278.06622</div>
                    </div>
                </div>
            </div>

            <!--footer links-->
            <div class="footer-links">
                <div class="row">
                    <div class="col-sm-4 col-md-2">
                        <h5>Browse by</h5>
                        <ul>
                            <li><a href="#">Brand</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Category</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-2">
                        <h5>Recources</h5>
                        <ul>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Sales</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-2">
                        <h5>Our company</h5>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <h5>Sign up for our newsletter</h5>
                        <p><i>Add your email address to sign up for our monthly emails and to receive promotional offers.</i></p>
                        <div class="form-group form-newsletter">
                            <input class="form-control" type="text" name="email" value="" placeholder="Email address" />
                            <input type="submit" class="btn btn-clean btn-sm" value="Subscribe" />
                        </div>
                    </div>
                </div>
            </div>

            <!--footer social-->

            <div class="footer-social">
                <div class="row">
                    <div class="col-sm-6">
                        <a href="#" target="_blank"><i class="fa fa-download"></i> Download Mobel</a> &nbsp; | <a href="#">Sitemap</a> &nbsp; | &nbsp; <a href="#">Privacy policy</a>
                    </div>
                    <div class="col-sm-6 links">
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</div> <!--/wrapper-->

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
