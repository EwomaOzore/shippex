/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

const royalBlue100 = "#E6E9F0";
const royalBlue200 = "#6e91ec";
const royalBlue500 = "#4169E1";
const royalBlue600 = "#2F50C1";

const ritual50 = "#f9f8fb";
const ritual100 = "#F4F2F8";
const ritual200 = "#EAE7F2";
const ritual300 = "#CDCAD9";
const ritual400 = "#A7A3B3";
const ritual500 = "#757281";
const ritual600 = "#58536E";
const ritual700 = "#3F395C";

const krasnyiRed100 = "#FEE3D4";
const krasnyiRed600 = "#D12030";

const dryGreen100 = "#E3FAD6";
const dryGreen600 = "#208D28";
const whatsappGreen = "#26d366";

const everSongOrange100 = "#FFF3D5";
const everSongOrange600 = "#DB7E21";

export const Colors = {
  primary: royalBlue600,
  royalBlue100,
  royalBlue200,
  royalBlue500,
  royalBlue600,
  ritual50,
  ritual100,
  ritual200,
  ritual300,
  ritual400,
  ritual500,
  ritual600,
  ritual700,
  krasnyiRed100,
  krasnyiRed600,
  dryGreen100,
  dryGreen600,
  whatsappGreen,
  everSongOrange100,
  everSongOrange600,
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  button: {
    primary: {
      background: royalBlue600,
      text: "white",
      pressedBackground: royalBlue500,
      disabled: ritual200,
      disabledText: ritual400,
    },
    secondary: {
      background: "white",
      text: royalBlue600,
      pressedBackground: royalBlue100,
      disabled: ritual100,
      disabledText: ritual300,
    },
    tertiary: {
      background: ritual100,
      text: ritual600,
      pressedBackground: royalBlue100,
      disabled: ritual100,
      disabledText: ritual300,
    },
  },
};
