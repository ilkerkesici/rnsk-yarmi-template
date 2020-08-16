




export class Template {
    primary = '#F99E17';
    primary_dark = '#EF9C18';
    primary_rgba = 'rgba(249,158,23,0.5)';
    primary_light = '#6ec6ff';
    white = '#ffffff';
    seconday= '#757575';
    secondary_dark = '#494949';
    secondary_light = '#a4a4a4';
    black_color = 'black';
    light_gray = '#D3D3D3';
    background = '#E6E6E6';
    danger = '#DC3446';
    success = '#28a745';

    constructor(){
        this.primary = '#F99E17';
        this.primary_dark = '#EF9C18';
        this.primary_rgba = 'rgba(249,158,23,0.5)';
        this.primary_light = '#6ec6ff';
        this.white = '#ffffff';
        this.seconday= '#757575';
        this.secondary_dark = '#494949';
        this.secondary_light = '#a4a4a4';
        this.black_color = 'black';
        this.light_gray = '#D3D3D3';
        this.background = '#E6E6E6';
        this.danger = '#DC3446';
        this.success = '#28a745';
    }

    setPrimary(primary: string, primary_dark: string, primary_light: string, primary_rgba: string){
        this.primary = primary;
        this.primary_dark = primary_dark;
        this.primary_light = primary_light;
        this.primary_rgba = primary_rgba;
    }

    setSecondary(secondary: string, secondary_dark: string, secondary_light: string){
        this.seconday = secondary;
        this.secondary_dark = secondary_dark;
        this.secondary_light = secondary_light;
    }

    setBlack(black: string){
        this.black_color = black;
    }
    setLightGray(light_gray: string){
        this.light_gray = light_gray;
    }
    setBackground(bacground: string){
        this.background = bacground;
    }
    setWhite(white: string){
        this.white = white;
    }
    setTypeColor(success: string, danger: string){
        this.success = success;
        this.danger = danger;
    }
}

export const Color = new Template();
