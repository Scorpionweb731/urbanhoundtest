class Breadcrumb extends HTMLElement{
    connectedCallback(){
        const TitleName = this.getAttribute('titlename');
        this.innerHTML = `
     <section class="page-title" style="background-image:url(./images/background/7.jpg)">
<div class="auto-container">
    <div class="clearfix">
        <div class="pull-left">
            <h1>${TitleName}</h1>
        </div>
        <div class="pull-right">
            <ul class="page-breadcrumb">
                <li><a href="./index.html">Home</a></li>
                <li>${TitleName}</li>
            </ul>
        </div>
    </div>
</div>
</section>
        `
    }
}

customElements.define('dynamic-breadcrumb',Breadcrumb )



