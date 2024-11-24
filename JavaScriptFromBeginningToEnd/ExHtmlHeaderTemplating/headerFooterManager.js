class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <p style="display: flex; justify-content: space-around; background-color: aliceblue; padding: 10px;">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
    </p>
        `
    }
}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <p style="display: flex; justify-content: space-around; background-color: aliceblue; padding: 10px;">@Yakov, 1995</p>
        `
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);