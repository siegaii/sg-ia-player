class Man {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  say() {
    console.log(this.name + ' say hello' + 'adsf');
  }
}

const zeyu = new Man('zeyu');

zeyu.say();