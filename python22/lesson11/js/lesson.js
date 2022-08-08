function display(result) {
    document.getElementById("result").innerHTML = (result);
}

/* Task 1 */

class Circle {
    constructor(radius) {
        this.radius = radius
    };

    get diameter() {
        return this.radius * 2
    };

    area () {
        return this.radius ** 2 * Math.PI
    };

    circumference () {
        return this.radius * 2 * Math.PI
    };
};

let userCircle;

function createCircle() {
    let radius = +prompt("Set radius of your circle: ");
    if (radius <= 0)
        document.getElementById("result").innerHTML = "введите значение больше нуля";
    else
        userCircle = new Circle(radius);
};


/* Task 2 */

class HtmlElement {
    constructor (tagName, selfClosing = true, textcontent, attributes, styles, nestedTags){
        this.tagName = tagName;
        this.selfClosing = selfClosing;
        this.textcontent = textcontent;
        this.attributes = attributes;
        this.styles = styles;
        this.nestedTags = nestedTags;
    }
    addAttribute(attribute) {
        this.attributes.push(attribute)
    }
    addStyle(style) {
        this.styles.push(style)
    }
    addNestedToStart(tagName, selfClosing, textcontent, attributes, styles, nestedTags){
        this.nestedTags.unshift(new HtmlElement(tagName, selfClosing, textcontent, attributes, styles, nestedTags)) 
    }
    addNestedToEnd(tagName, selfClosing, textcontent, attributes, styles, nestedTags){
        this.nestedTags.push(new HtmlElement(tagName, selfClosing, textcontent, attributes, styles, nestedTags))
    }
    toString(){
        if (this.selfClosing)
        return `<${this.tagName} ${this.attributes.join(" ")} style="${this.styles.join("; ")};">${this.textcontent}${this.nestedTags.join("")}</${this.tagName}>`;
        else
        return `<${this.tagName} style="${this.styles.join('; ')};" ${this.attributes.join(" ")}>`;
      }
    getHtml(){
        let Html = "";
        if (this.selfClosing)
        Html = 
        `<${this.tagName} ${this.attributes.join(" ")} style="${this.styles.join("; ")};">${this.textcontent}${this.nestedTags.join("")}</${this.tagName}>`;
        else
        Html = 
        `<${this.tagName} style="${this.styles.join("; ")};" ${this.attributes.join(" ")}>`;
        display(Html);
    }
}

let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br>"

let wrapper = new HtmlElement("div", true, "", ["id='wrapper'"], ["display: flex"], []);
let h3 = new HtmlElement("h3", true, "What is Lorem Ipsum?", [], [], []);
let img = new HtmlElement("img", false, "", ["src='../img/lipsum.jpg'", "alt='Lorem Ipsum'"], ["width: 100%"], [])

let a = new HtmlElement("a", true, "More...", ["href = 'https://www.lipsum.com'", "target='_blank'"], [], [])

let p = new HtmlElement("p", true, lorem, [], ["text-align: justify"], [a])

wrapper.addNestedToEnd("div", true, "", [], ["width: 300px", "margin: 10px"], [h3, img, p]);
wrapper.addNestedToEnd("div", true, "", [], ["width: 300px", "margin: 10px"], [h3, img, p]);

/* Task 3 */

class CssClass{
    constructor(name, styles){
        this.name = name;
        this.styles = styles;
    }
    addStyle(style){
        this.styles.push(style)
    }
    removeStyle(style){
        let i = this.styles.indexOf(style)
        delete this.styles[i]
    }
    toString(){
        return `.${this.name}{${this.styles.join("; ")};}`
    }
    getCss(){
        /* display(`.${this.name}{${this.styles.join("; ")};}`); */
        return `.${this.name}{${this.styles.join("; ")};}`
    }
}

/* Task 4 */

class HtmlBlock{
    constructor(styles, elements){
        this.styles = styles;
        this.elements = elements;
    }
    getCode(){
        let codeString = `<head><style>${this.styles.join(" ")}</style></head><body>${this.elements.join(" ")}</body>`;
        document.write(codeString)
    }
}

let wrap = new CssClass("wrap", ["display: flex"]);
let block = new CssClass("block", ["width; 300px", "margin: 10px"]);
let imgStyle = new CssClass("img", ["width: 100%"]);
let text = new CssClass("text", ["text-align: justify"]);

let styles = [wrap, block, imgStyle, text];

let wrapperClassed = new HtmlElement("div", true, "", ["id='wrapper'", "class='wrap'"], [], []);
let imgClassed = new HtmlElement("img", false, "", ["class='img'", "src='../img/lipsum.jpg'", "alt='Lorem Ipsum'"], ["width: 100%"], [])
let pClassed = new HtmlElement("p", true, lorem, ["class='text'"], [], [a])

wrapperClassed.addNestedToEnd("div", true, "", ["class='block'"], [], [h3, imgClassed, pClassed]);
wrapperClassed.addNestedToEnd("div", true, "", ["class='block'"], [], [h3, imgClassed, pClassed]);

let doc = new HtmlBlock(styles, [wrapperClassed]);
