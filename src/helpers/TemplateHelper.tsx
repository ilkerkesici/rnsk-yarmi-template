import { Template } from '../styles/Colors';
const PRIMARY_COLOR_DEFAULT = '#F99E17';
const PRIMARY_DARK_COLOR_DEFAULT = '#EF9C18';
const PRIMARY_RGBA_DEFAULT = 'rgba(249,158,23,0.5)';
const PRIMARY_LIGHT_COLOR_DEFAULT = '#6ec6ff';
const WHITE_COLOR = '#ffffff';
const SECONDARY_COLOR = '#757575';
const SECONDARY_DARK_COLOR ='#494949';
const SECONDARY_LIGHT_COLOR ='#a4a4a4';
const BLACK_COLOR = 'black';
const LIGHT_GRAY = '#D3D3D3';
const BACKGROUND_COLOR = '#E6E6E6';
const DANGER_COLOR = '#DC3446';
const SUCCESS_COLOR = '#28a745';

const PURPLE_PRIMARY = '#6C63FF';
const PURPLE_PRIMARY_DARK = '#534BD2';
const PURPLE_PRIMARY_LIGHT = '#7E77F9';
const PURPLE_PRIMARY_RGBA = 'rgba(108, 99, 255, 0.5)';

const GREEN_PRIMARY = '#00BFA6';
const GREEN_PRIMARY_DARK = '#02A08C';
const GREEN_PRIMARY_LIGHT = '#03D2BA';
const GREEN_PRIMARY_RGBA = 'rgba(0, 191, 166, 0.5)';

const BLUE_PRIMARY = '#00B0FF';
const BLUE_PRIMARY_DARK = '#0095D8';
const BLUE_PRIMARY_LIGHT = '#12B0FB';
const BLUE_PRIMARY_RGBA = 'rgba(0, 176, 255, 0.5)';

const PINK_PRIMARY = '#F50057';
const PINK_PRIMARY_DARK = '#C90048';
const PINK_PRIMARY_LIGHT = '#F9246F';
const PINK_PRIMARY_RGBA = 'rgba(245, 0, 87, 0.5)';


/**
 * Transform the default the old templaet
 * @param old_template is old template object
 */
export const makeDefault = (old_template: Template) => {
    old_template.setPrimary(
        PRIMARY_COLOR_DEFAULT,
        PRIMARY_DARK_COLOR_DEFAULT,
        PRIMARY_LIGHT_COLOR_DEFAULT,
        PRIMARY_RGBA_DEFAULT
    );
    old_template.setBlack(BLACK_COLOR);
    old_template.setBackground(BACKGROUND_COLOR);
    old_template.setLightGray(LIGHT_GRAY);
    old_template.setSecondary(SECONDARY_COLOR, SECONDARY_DARK_COLOR, SECONDARY_LIGHT_COLOR);
    old_template.setWhite(WHITE_COLOR);
    old_template.setTypeColor(SUCCESS_COLOR, DANGER_COLOR);
    return old_template;
}

export const makePurple = (old_template: Template) =>  {
    makeDefault(old_template);
    old_template.setPrimary(PURPLE_PRIMARY, PURPLE_PRIMARY_DARK, PURPLE_PRIMARY_LIGHT, PURPLE_PRIMARY_RGBA);
}

export const makeGreen = (old_template: Template) =>  {
    makeDefault(old_template);
    old_template.setPrimary(GREEN_PRIMARY, GREEN_PRIMARY_DARK, GREEN_PRIMARY_LIGHT, GREEN_PRIMARY_RGBA);
}

export const makeBlue = (old_template: Template) => {
    makeDefault(old_template);
    old_template.setPrimary(BLUE_PRIMARY, BLUE_PRIMARY_DARK, BLUE_PRIMARY_LIGHT, BLUE_PRIMARY_RGBA);
}

export const makePink = (old_template: Template) => {
    makeDefault(old_template);
    old_template.setPrimary(PINK_PRIMARY, PINK_PRIMARY_DARK, PINK_PRIMARY_LIGHT, PINK_PRIMARY_RGBA);
}