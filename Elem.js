class Elem {
    #index

    constructor(szuloElem, index){
        this.#index=index;
        szuloElem.append(`<div class="elem"> <p class="p"></p> </div>`)
        //megfogom a html elemket
        this.divElem=$("article div:last-child")

        //this.pElem = this.divElem.children.("p")
        this.pElem = $("article div:last-child p")

        this.divElem.on("click", () => {
            //this.setElem("x")
        
            //létrehozunk egy sajáteseményre
            
            this.kattintasTrigger()


        })
    }

    getIndex(){
        return this.#index
    }

    setElem(adat){
        this.pElem.html(adat)

    }

    kattintasTrigger(){
        //létrehozza a saját eseményünket
        //customevent javascript a neten 
        //mozzila org

        const esemeny = new CustomEvent( "elemKattintas", {detail:this})
        window.dispatchEvent(esemeny)
    }

}

export default Elem;

//szuloelem(<p></>)
//p etget  mmegfogjuk
//es ha megfogtuk beleírjuk hogy