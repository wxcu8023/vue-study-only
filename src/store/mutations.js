export default {
    storageState(state, e){
        console.log("zzz")
        var myStorage = JSON.parse(localStorage.getItem('mydata'))
        state.prs.postState.process = e
        state.prs.postState.result = eval(e)
        if (myStorage == null){
            myStorage = new Array()
            myStorage.push(JSON.parse(JSON.stringify(state.prs.postState)))
            console.log(1)
            console.log(myStorage)
            localStorage.setItem('mydata', JSON.stringify(myStorage))
        } else {
            
            myStorage.push(JSON.parse(JSON.stringify(state.prs.postState)));
            console.log(2)
            console.log(myStorage)
            localStorage.setItem('mydata', JSON.stringify(myStorage))
        }
    }
}