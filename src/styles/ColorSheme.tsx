interface Colors {
  primary?: string;
  accent?: string;
  headerText?: string;
  mainText?: string;
  link?: string;
  backgroundWebsite?: string;
  backgroundColorSection?: string;
  iconNavBar?: string
}

export type themeobjectType = {
  colors: Colors,
  text: {
    textSize: string,
    lineHeight: string
  },
  animation: {
    transitionWidth: string
    transitionAll: string
    transitionBackground: string
    transitionColor: string
  }
}
export const themeNew = (isDarkTheme: boolean): themeobjectType => {

  const lightColors: Colors = {
    primary: "#FFB400",
    accent: "rgba(255,180,0,0.71)",
    headerText: "#2B2B2B",
    mainText: "#767676",
    link: "#FFB400",
    backgroundColorSection: "#FFFFFF",
    backgroundWebsite: "#F0F0F6",
    iconNavBar: "#767676"
  };
  const darkColors: Colors = {
    primary: "#e5b64a",
    accent: "rgba(255, 209, 102, 0.71)",
    headerText: "#FFFFFF",
    mainText: "#E0E0E0",
    link: "#FFB400",
    backgroundColorSection: "#2B2B2B",
    backgroundWebsite: "#121212",
    iconNavBar: "#E0E0E0"
  };

  const colors = isDarkTheme ? lightColors : darkColors;

  return {
    colors,
    text: {
      textSize: "15px",
      lineHeight: "24px"
    },
    animation: {
      transitionWidth: "width .3s ease-out",
      transitionAll: "all .9s ease",
      transitionBackground: "background .3s ease-out",
      transitionColor: "color .3s ease-out",
    }
  };
};
