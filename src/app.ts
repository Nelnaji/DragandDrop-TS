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


        this.titleInputElement = this.element.querySelector('#title')! as  HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description')! as  HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people')! as  HTMLInputElement;
    

        this.configurator();
        this.nodeInserter();
    }

    private submitHandler(event:Event){
        event.preventDefault();
        console.log(this.titleInputElement.value)
    };
    private configurator(){
        this.element.addEventListener('submit', this.submitHandler.bind(this))
    };

    private nodeInserter() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }

}

const prjInput = new ProjectInput();