// учимся работать с классами
abstract class Birds {
  canFly() { }
}

class Hawk extends Birds {
  canFly(): void {
    return console.log('я лечу...')
  }
}

const kesha = new Hawk()
kesha.canFly()

class Vorobei extends Birds {
  age: number
  canFly(): void {
    return console.log('я тоже умею летать')
  }

  constructor(ageOfBird: number) {
    super()
    this.age = ageOfBird
  }
  getAge() {
    return console.log(this.age)
  }
}

const ptaha = new Vorobei(10)
ptaha.getAge()