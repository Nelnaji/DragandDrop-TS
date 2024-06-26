// autobind decorator
function autobind(_:any, _2:string, descriptor: PropertyDescriptor){


    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get(){}
    }
}

// project input class
class ProjectInput{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        // all elements : 
        this.templateElement = document.querySelector('#project-input')! as HTMLTemplateElement; 
        this.hostElement = document.querySelector('#app')! as  HTMLDivElement;
        
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element= importedNode.firstElementChild as HTMLFormElement;
        this.element.id='user-input';

// this.element because and not document, because the element is still under construction ²
        this.titleInputElement = this.element.querySelector('#title')! as  HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description')! as  HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people')! as  HTMLInputElement;
    

        this.configurator();
        this.nodeInserter();
    }

//this is how you setup tuple [ele,ele,ele]
    private gatherUserInput():[string,string,number] {
        const enteredTitile = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        if(
            enteredTitile.trim().length === 0 || 
            enteredDescription.trim().length === 0 || 
            enteredPeople.trim().length === 0
            ) {

                
        }
    }
    @autobind
    private submitHandler(event:Event){
        event.preventDefault();
        console.log(this.titleInputElement.value)
        const userInput = this.gatherUserInput();
    };
    private configurator(){
        this.element.addEventListener('submit', this.submitHandler.bind(this))
    };

    private nodeInserter() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }

}

const prjInput = new ProjectInput();