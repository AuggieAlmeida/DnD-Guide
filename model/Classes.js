class Classes {
    /* Construtor */
    constructor(obj) {
        obj = obj != null ? obj : {}
        this.className = obj.className != null ? obj.className : ''
        this.classLife = obj.classLife != null ? obj.classLife : ''
        this.classDescription = obj.classDescription != null ? obj.classDescription : ''
    }

    /* Getters e Setters */
    get className() {
        try {
            return this.className
        } catch (err) {
            console.log(err);
        }
    }

    set className(name){
        try {
            this.className = name
        } catch (err) {
            console.log(err);
        }
    }

    get classLife() {
        try {
            return this.classLife
        } catch (err) {
            console.log(err);
        }
    }

    set classLife(name){
        try {
            this.classLife = name
        } catch (err) {
            console.log(err);
        }
    }
    
    get classDescription() {
        try {
            return this.classDescription
        } catch (err) {
            console.log(err);
        }
    }

    set classDescription(name){
        try {
            this.classDescription = name
        } catch (err) {
            console.log(err);
        }
    }

}

export {Classes};