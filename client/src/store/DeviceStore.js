import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Холодильники'},
            {id:2, name: 'Смартфоны'},
            {id:3, name: 'Ноутбуки'},
            {id:4, name: 'Телевизоры'}
        ]
        this._brands = [
            {id:1, name: 'Samsung'},
            {id:2, name: 'Apple'},
            {id:3, name: 'Lenovo'},
            {id:4, name: 'Asus'},
        ]
        this._devices = [
            {id:1, name: 'IPhone 11 pro', price: 21000, rating: 5, img: 'https://img.mvideo.ru/Pdb/30041492b.jpg'},
            {id:2, name: 'IPhone 12 pro', price: 22000, rating: 5, img: 'https://img.mvideo.ru/Pdb/30041492b.jpg'},
            {id:3, name: 'IPhone 13 pro', price: 23000, rating: 5, img: 'https://img.mvideo.ru/Pdb/30041492b.jpg'},
            {id:4, name: 'IPhone 14 pro', price: 24000, rating: 5, img: 'https://img.mvideo.ru/Pdb/30041492b.jpg'},
            {id:5, name: 'IPhone 15 pro', price: 24000, rating: 5, img: 'https://img.mvideo.ru/Pdb/30041492b.jpg'},
            {id:6, name: 'IPhone 16 pro', price: 24000, rating: 5, img: 'https://img.mvideo.ru/Pdb/30041492b.jpg'},
            {id:7, name: 'IPhone 17 pro', price: 24000, rating: 5, img: 'https://img.mvideo.ru/Pdb/30041492b.jpg'},
            {id:8, name: 'IPhone 18 pro', price: 24000, rating: 5, img: 'https://img.mvideo.ru/Pdb/30041492b.jpg'},
            {id:9, name: 'IPhone 19 pro', price: 24000, rating: 5, img: 'https://img.mvideo.ru/Pdb/30041492b.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}