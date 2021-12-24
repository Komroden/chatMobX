import {makeAutoObservable} from "mobx";

class Messages {
    messages=[
        {id:1,title:'Animals',text:['123','231','456']},
        {id:2,title:'Policy',text:['asd','asd','aaa']},
        {id:3,title:'Games',text:['b24','b56','b67']}
    ]
    constructor() {
        makeAutoObservable(this)
    }

    addMessage(id,message){
        this.messages[id-1].text.push(message)
    }

}
export default new Messages()