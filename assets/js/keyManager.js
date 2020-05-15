YT.keyManager = {
    keys: ["AIzaSyDjF_xiMwuCmUpqYA4ecoVicv_qRI1RbfI"], 
    keyIndex: 0,
    getKey: function () {
        this.keyIndex = (this.keyIndex + 1) % (this.keys.length);
        return this.keys[this.keyIndex];
    },
    shuffleKeys: function () {
        this.keys.shuffle();
    }
}
