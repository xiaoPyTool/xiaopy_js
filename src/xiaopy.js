class Xiaopy {
    constructor() {
        this.version = '0.0.1'
        this.xp = window.xp
    }

    sayHi() {
        console.log(`Hi, I'm Xiaopy ${this.version}!`)
    }

    onDataChange(func) {
        window.xp_onDataChange_func = function (name, key, valueType, value) {
            // valueType 为 STRING INT BOOLEAN FLOAT, 根据valueTye把value转换成相应的类型去调用func
            switch (valueType) {
                case 'STRING':
                    func(name, key, value)
                    break
                case 'INT':
                    func(name, key, parseInt(value))
                    break
                case 'BOOLEAN':
                    func(name, key, value === 'true')
                    break
                case 'FLOAT':
                    func(name, key, parseFloat(value))
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
            return String(this.xp.stringValue(name, key))
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
            this.xp.setStringValue(name, key, value)
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
            return this.xp.intValue(name, key)
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
            this.xp.setIntValue(name, key, value)
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
            return this.xp.floatValue(name, key)
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
            this.xp.setFloatValue(name, key, value)
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
            return this.xp.boolValue(name, key)
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
            this.xp.setBoolValue(name, key, value)
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
