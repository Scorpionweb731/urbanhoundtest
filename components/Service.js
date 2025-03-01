class Service extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <div class="pet service">
        <section class="steps">
            <div class="container">                
                <div class="sec-title centered">
                    <div class="separator">
                        <span class="icon flaticon-pawprint-1"></span>
                    </div>
                    <h3 class="wow fadeInDown">Services that we <span class="wow pulse" data-wow-delay="1s">
                        Offers</span></h3>
                </div>
                <div class="services">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="card orange s_one wow fadeInLeft">
                                    <div class="icon">
                                        <div class="svg-icon" id="svg-1" data-svg-icon="./images/home_5/svg/pet_grooming.svg">
                                        </div>
                                    </div>
                                    <div class="content">
                                        <a href="#" title="Pet Grooming">
                                            <h5>Pet Grooming</h5>
                                        </a>
                                        <p>
                                            Due thanks blissfully reverent that outside pled along some goldfish did
                                            chromatic gosh sloth sedas instead coincident
                                        </p>
                                        <div class="more">
                                            <a href="#" title="Read More"><i class="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="card orange s_two wow fadeInUp">
                                    <div class="icon">
                                        <div class="svg-icon" id="svg-2" data-svg-icon="./images/home_5/svg/pet_food.svg">
                                        </div>
                                    </div>
                                    <div class="content">
                                        <a href="#" title="Pet Adoption">
                                            <h5>Pet Food</h5>
                                        </a>
                                        <p>
                                            Due thanks blissfully reverent that outside pled along some goldfish did
                                            chromatic gosh sloth sedas instead coincident
                                        </p>
                                        <div class="more">
                                            <a href="#" title="Read More"><i class="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="card orange s_four wow fadeInLeft">
                                    <div class="icon">
                                        <div class="svg-icon" id="svg-10" data-svg-icon="./images/home_5/svg/pet_sitting.svg">
                                        </div>
                                    </div>
                                    <div class="content">
                                        <a href="#" title="Pet Sitting & Walking">
                                            <h5>Toys & Accessories</h5>
                                        </a>
                                        <p>
                                            Due thanks blissfully reverent that outside pled along some goldfish did
                                            chromatic gosh sloth sedas instead coincident
                                        </p>
                                        <div class="more">
                                            <a href="#" title="Read More"><i class="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
        </section>
    </div>
        `;
  }
}

customElements.define("dynamic-service", Service);
