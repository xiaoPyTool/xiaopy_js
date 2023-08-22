class Xiaopy {
    constructor() {
        this.version = '0.0.2'
        this.xp = window.xp
        // 获取window.loactionvs倒数第二个路径
        const array = window.location.pathname.split("/")
        if (array.length >= 2) {
            array[array.length - 1] = "index.html"
            this.name = array[array.length - 2]
        } else {
            this.name = undefined
        }
        console.log("xiaopy group", this.name)
    }

    sayHi() {
        console.log(`Hi, I'm Xiaopy ${this.version}!`)
    }

    onDataChange(func) {
        window.xp_onDataChange_func = function (name, key, valueType, value) {
            // valueType 为 STRING INT BOOLEAN FLOAT, 根据valueTye把value转换成相应的类型去调用func
            const _name = name || this.name
            switch (valueType) {
                case 'STRING':
                    func(_name, key, value)
                    break
                case 'INT':
                    func(_name, key, parseInt(value))
                    break
                case 'BOOLEAN':
                    func(_name, key, value === 'true')
                    break
                case 'FLOAT':
                    func(_name, key, parseFloat(value))
                    break
                default:
                    break
            }
        }
    }

    saveData(func) {
        window.xp_saveData_func = func
    }

    stringGroupValue(name, key) {
        if (this.xp) {
            return String(this.xp.stringValue(name || this.name, key))
        } else {
            const newKey = name ? `${name}_${key}` : key
            return localStorage.getItem(newKey)
        }
    }
    stringValue(key) {
        return this.stringGroupValue(null, key)
    }
    setStringGroupValue(name, key, value) {
        if (this.xp) {
            this.xp.setStringValue(name || this.name, key, value)
        } else {
            const newKey = name ? `${name}_${key}` : key
            localStorage.setItem(newKey, value)
        }
    }
    setStringValue(key, value) {
        this.setStringGroupValue(null, key, value)
    }

    intGroupValue(name, key) {
        if (this.xp) {
            return this.xp.intValue(name || this.name, key)
        } else {
            const newKey = name ? `${name}_${key}` : key
            return parseInt(localStorage.getItem(newKey))
        }
    }
    intValue(key) {
        return this.intGroupValue(null, key)
    }
    setIntGroupValue(name, key, value) {
        if (this.xp) {
            this.xp.setIntValue(name || this.name, key, value)
        } else {
            const newKey = name ? `${name}_${key}` : key
            localStorage.setItem(newKey, value)
        }
    }
    setIntValue(key, value) {
        this.setIntGroupValue(null, key, value)
    }

    floatGroupValue(name, key) {
        if (this.xp) {
            return this.xp.floatValue(name || this.name, key)
        } else {
            const newKey = name ? `${name}_${key}` : key
            return parseFloat(localStorage.getItem(newKey))
        }
    }
    floatValue(key) {
        return this.floatGroupValue(null, key)
    }
    setFloatGroupValue(name, key, value) {
        if (this.xp) {
            this.xp.setFloatValue(name || this.name, key, value)
        } else {
            const newKey = name ? `${name}_${key}` : key
            localStorage.setItem(newKey, value)
        }
    }
    setFloatValue(key, value) {
        this.setFloatGroupValue(null, key, value)
    }

    boolGroupValue(name, key) {
        if (this.xp) {
            return this.xp.boolValue(name || this.name, key)
        } else {
            const newKey = name ? `${name}_${key}` : key
            return localStorage.getItem(newKey) === 'true'
        }
    }
    boolValue(key) {
        return this.boolGroupValue(null, key)
    }
    setBoolGroupValue(name, key, value) {
        if (this.xp) {
            this.xp.setBoolValue(name || this.name, key, value)
        } else {
            const newKey = name ? `${name}_${key}` : key
            localStorage.setItem(newKey, value)
        }
    }
    setBoolValue(key, value) {
        this.setBoolGroupValue(null, key, value)
    }

    runScript(name) {
        if (this.xp) {
            this.xp.runScript(name)
        }
    }
}

const xp = new Xiaopy()
export default xp
