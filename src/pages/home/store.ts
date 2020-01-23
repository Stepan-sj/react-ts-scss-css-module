import { observable, action, autorun, runInAction, computed } from 'mobx'


class homeStore {
    @observable count = 1

    @computed get computedState(){
        return this.count*2
    }

    @action addCount = ()=>{
        console.log(1)
        this.count += 1
    }
}



let HomeStore = new homeStore()


export default {
    HomeStore
}