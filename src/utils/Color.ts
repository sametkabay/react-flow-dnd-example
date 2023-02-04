import MaterialColors from './material-colors.json';

export enum ColorName {
  Red = 'red',
  Pink = 'pink',
  Purple = 'purple',
  DeepPurple = 'deeppurple',
  Indigo = 'indigo',
  Blue = 'blue',
  LightBlue = 'lightblue',
  Cyan = 'cyan',
  Teal = 'teal',
  Green = 'green',
  LightGreen = 'lightgreen',
  Lime = 'lime',
  Yellow = 'yellow',
  Amber = 'amber',
  Orange = 'orange',
  DeepOrange = 'deeporange',
  Brown = 'brown',
  Grey = 'grey',
  BlueGrey = 'bluegrey',
}

export enum ColorTone {
  T50 = '50',
  T100 = '100',
  T200 = '200',
  T300 = '300',
  T400 = '400',
  T500 = '500',
  T600 = '600',
  T700 = '700',
  T800 = '800',
  T900 = '900',
  Ta100 = 'a100',
  Ta200 = 'a200',
  Ta400 = 'a400',
  Ta700 = 'a700',
}

export enum ColorType {
  Light = 'light',
  Dark = 'dark',
}

class ColorUtils {
  random() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  materail(name: ColorName, tone: ColorTone) {
    return MaterialColors[name][tone];
  }

  randomMaterial(type?: ColorType) {
    const names = Object.keys(ColorName);
    const tones = Object.keys(ColorTone);
    const nameIndex = Math.round(Math.random() * (names.length - 1));
    let toneIndex = Math.round(Math.random() * (tones.length - 1));

    if (type === ColorType.Light && toneIndex > (tones.length - 1) / 2) {
      toneIndex = +(toneIndex / 2).toFixed();
    }

    if (type === ColorType.Dark && toneIndex < (tones.length - 1) / 2) {
      toneIndex = toneIndex * 2;
    }

    return this.materail(ColorName[names[nameIndex] as keyof typeof ColorName], ColorTone[tones[toneIndex] as keyof typeof ColorTone]);
  }
}

const Colors = new ColorUtils();

export default Colors;
