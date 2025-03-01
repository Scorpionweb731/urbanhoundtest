class Appintment extends HTMLElement{
    connectedCallback(){
        const TitleName = this.getAttribute('titlename');
       
this.innerHTML = `
<section class="appointment-section" style="background-image:url(images/background/3.png)">
            <div class="auto-container">
                <div class="sec-title light centered">
                    <div class="separator">
                        <span class="icon flaticon-pawprint-1"></span>
                    </div>
                    <div class="title">Because We Really Care About Your Pets</div>
                    <h2>Get An Appointment</h2>
                </div>
                <div class="default-form">
                    <div class="form-box">
                        <form method="post" action="contact-form">
                            <div class="row clearfix">
                                <div class="form-group col-md-4 col-sm-6 col-xs-12">
                                    <input type="text" name="name" value="" placeholder="Name" required>
                                </div>
                                <div class="form-group col-md-4 col-sm-6 col-xs-12">
                                    <input type="email" name="email" value="" placeholder="Email" required>
                                </div>
                                <div class="form-group col-md-4 col-sm-6 col-xs-12">
                                    <input type="text" name="phone" value="" placeholder="Phone #" required>
                                </div>
                                <div class="form-group col-md-4 col-sm-6 col-xs-12">
                                    <span class="clock-icon"><span class="icon fa fa-calendar"></span></span>
                                    <input class="datepicker" type="text" name="date" value="" placeholder="Date & Time"
                                        required>
                                </div>
                                <div class="form-group col-md-4 col-sm-6 col-xs-12">
                                    <input type="text" name="category" value="" placeholder="Pet Category" required>
                                </div>
                                <div class="form-group col-md-4 col-sm-6 col-xs-12">
                                    <input type="text" name="service" value="" placeholder="Service Type" required>
                                </div>
                                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                    <textarea placeholder="Your Comments..."></textarea>
                                </div>
                                <div class="form-group text-center col-md-12 col-sm-12 col-xs-12">
                                    <button type="submit" class="theme-btn btn-style-two">Send request</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>`


    }
}

customElements.define('dynamic-breadcrumb',Appintment )


