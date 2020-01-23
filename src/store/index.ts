import homeStore from '../pages/home/store'
import { observable, action, autorun, runInAction, computed } from 'mobx'


class aStore {
    @observable a = 1
}
let AStore = new aStore()

let rootStore = {
    homeStore,
    AStore
}

export default {
    rootStore
}