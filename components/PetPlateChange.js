class PetPlate extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
      <div class="color-palate">
        <div class="color-trigger">
            <i class="flaticon-pawprint-1"></i>
        </div>
        <div class="color-palate-head">
            <h6>Choose Your Pet</h6>
        </div>
        <div class="various-color clearfix">
            <div class="colors-list d-flex justify-content-center">
                <span class="palate" ><img src="./images/custom_images/dog.png"></span>
                <span class="palate"><img src="./images/custom_images/cat.png"></span>
                
            </div>
        </div>
        <a href="#" class="purchase-btn">Quality Pet Care.</a>
        <div class="palate-foo">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus tempora vero sed repudiandae voluptatum </span>
        </div>
    </div>
        `
    }
}

customElements.define('pet-plate',PetPlate )