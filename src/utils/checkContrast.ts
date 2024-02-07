import chroma, { Color } from 'chroma-js';

const targetContrast = 6;
const acceptableContrast = 4;

export function findContrastLevel(
    backgroundColor: string | Color = 'white',
    inputColor: string | Color,
    returnMode: 'first' | 'highest' = 'first' 
  ): Color {
    let darkerColor = chroma(inputColor);
    let lighterColor = chroma(inputColor);
    let maxIterations = 100;
    let scoredColors = {}
    for (let i = 0; i < maxIterations; i++) {
        let currentLuminanceDarker = darkerColor.luminance();
        let currentLuminanceLighter = lighterColor.luminance();
        if (currentLuminanceDarker >= 0.01) {
            darkerColor = adjustContrastViaLuminance(darkerColor, 0.01, 'darken')
            let darkerContrast = chroma.contrast(backgroundColor, darkerColor);
            if (darkerContrast >= acceptableContrast) {
                if (darkerContrast >= targetContrast && returnMode === 'first') return darkerColor;
                scoredColors[darkerContrast] = darkerColor;
            }
        }
        if (currentLuminanceLighter <= .99) {
            lighterColor = adjustContrastViaLuminance(lighterColor, 0.01, 'lighten')
            let lighterContrast = chroma.contrast(backgroundColor, lighterColor);
            if (lighterContrast >= acceptableContrast) {
                if (lighterContrast >= targetContrast && returnMode === 'first') return lighterColor;
                scoredColors[lighterContrast] = lighterColor;
            }
        }
        if (currentLuminanceDarker <= 0 && currentLuminanceLighter >= 1) break;
    }
    let sortedScoredColors = Object.keys(scoredColors).map(Number).sort((a, b) => b - a);
    if (sortedScoredColors[0] < acceptableContrast || sortedScoredColors.length === 0){
        throw new Error(`No suitable contrast found for 
            inputColor: ${chroma(inputColor).css('hsl')} 
            on backgroundColor: ${backgroundColor} 
            final darkerColor: ${darkerColor.css('hsl')} 
            final lighterColor: ${lighterColor.css('hsl')}
            highest contrast score: ${sortedScoredColors[0]}
            highest contrast color: ${scoredColors[sortedScoredColors[0]]}`
        );
    }
    return scoredColors[sortedScoredColors[0]];
}

function adjustContrastViaLuminance(color: Color, value: number, mode: string): Color {
    if (mode === 'darken') {
        const colorL = chroma(color).luminance() - value;
        return chroma(color).luminance(colorL, 'hsl');
    } else if (mode === 'lighten') {
        const colorL = chroma(color).luminance() + value;
        return chroma(color).luminance(colorL, 'hsl');
    }
}