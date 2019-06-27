class PersonCard {
    constructor(element, data) {
        this.element = element;

        this.data = data;

        this.element.addEventListener("mouseover", _ => {

        })
    }


}

class PersonFactory {
    constructor(data) {
        this.people = [];

        this.parent = document.querySelector(".people-container");

        this.people = data.map(elemData => {
            let element = this.constructHTML(elemData);

            return new PersonCard(element, elemData);
        })
    }

    constructHTML(data) {
        let container = this.constructElement(this.parent, "div", "", [ "person", "hide-me" ]);

        container.dataset.personId = data.id;
        
        this.constructElement(container, "img", "", ["person-img"]).src = data.img;

        let contentDiv = this.constructElement(container, "section", "", ["person-content"]);

        let title = this.constructElement(contentDiv, "h2", data.name, []);
        this.constructElement(title, "h3", data.role, []);

        this.constructElement(contentDiv, "p", data.about, []);

        return container;
    }

    constructElement(parent, type, data, classes) {
        let element = document.createElement(type);
        parent.appendChild(element);

        if(data && data !== "") element.textContent = data;

        classes.forEach(cssClass => element.classList.add(cssClass));

        return element;
    }
}

const data = [
    { id: "1", name: "Sam Ko", role: " - Team Lead", img: "./img/SamKo_square.jpg", about: "Student @LambdaSchool. Feeling hygge ☀" },
    { id: "2", name: "Vijay Das", role: " - Backend", img: "./img/VijayD_square.jpg", about: "Experienced strategy, management and marketing professional. Software developer from Lamda School. Solve hard problems, make new things, get things done." },
    { id: "3", name: "Tyler Lippe", role: " - Frontend", img: "./img/Tyler.jpg", about: "FrontEnd Dev from Lambda School. React is love, React is life." },
    { id: "4", name: "Ryan Wisniewski", role: " - User Interface", img: "./img/RyanW_square.jpg", about: "Beginner Developer from Lambda School. Looking to learn as much as I possibly can over the length of the course. Let's do this!" },
    { id: "5", name: "Vincent Costa", role: " - User Interface", img: "./img/VincentC.jpg", about: "I love creating new things, woking on frustrating challenges, and extending my knowledge. Small business owner. Student at Lambda School" }
]

const factory = new PersonFactory(data);

$(document).ready(function() {
    
    $(document).scroll( function(){

        $('.hide-me').each( function(i){
            
            let bottom_of_object = $(this).offset().top + $(this).outerHeight() - 325;
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 
    
    });
    
});
