class Races {
    /* Construtor */
    constructor(obj) {
        obj = obj != null ? obj : {}
        this.raceName = obj.raceName != null ? obj.raceName : ''
        this.raceIncrement = obj.raceIncrement != null ? obj.raceIncrement : ''
        this.raceDescription = obj.raceDescription != null ? obj.raceDescription : ''
    }

    /* Getters e Setters */
    get raceName() {
        try {
            return this.raceName
        } catch (err) {
            console.log(err);
        }
    }

    set raceName(name){
        try {
            this.raceName = name
        } catch (err) {
            console.log(err);
        }
    }

    get raceIncrement() {
        try {
            return this.raceIncrement
        } catch (err) {
            console.log(err);
        }
    }

    set raceIncrement(name){
        try {
            this.raceIncrement = name
        } catch (err) {
            console.log(err);
        }
    }

    get raceDescription() {
        try {
            return this.raceDescription
        } catch (err) {
            console.log(err);
        }
    }

    set raceDescription(name){
        try {
            this.raceDescription = name
        } catch (err) {
            console.log(err);
        }
    }

}

export {Races};