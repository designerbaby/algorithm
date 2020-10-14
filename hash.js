class HashTable {
  constructor() {
    this.items = []
  }
  get(key) {
    const hash = this.keyToHash(key)
    return this.items[key]
  }
  set(key, value) {
    const hash = this.keyToHash(key)
    this.items[key] = value
  }
  remove(key) {
    const hash = this.keyToHash(key)
    delete this.items[key]
  }
  keyToHash(key) {
    // 把字符串key变成数字
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    hash = hash % 37
    return hash
  }
  log () {
    console.log(this.items)
  }
}

// 测试代码
let hash = new HashTable()
hash.set('name', 'test')
hash.log()
hash.remove('name')
hash.log()
