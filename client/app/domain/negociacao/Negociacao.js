class Negociacao {

    constructor(_data, _quantidade, _valor) {
        this._data = new Date(_data.getTime());
        Object.assign(this, {_quantidade, _valor}); // shorthand property names
        Object.freeze(this);
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}