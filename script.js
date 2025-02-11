// Convert Hex to RGB
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

// Convert RGB to Hex
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Function to convert Hex and RGB
function convertColor() {
    const hexInput = document.getElementById('hexInput').value;
    const rgbInput = document.getElementById('rgbInput').value;

    // Check if both inputs have values
    if (hexInput && rgbInput) {
        alert('Please clear one of the fields to proceed with the conversion.');
        return; // Stop the function if both inputs have values
    }

    // Handle Hex input
    if (hexInput) {
        const rgb = hexToRgb(hexInput);
        document.getElementById('hexCode').value = hexInput;
        document.getElementById('rgbCode').value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    }

    // Handle RGB input
    if (rgbInput) {
        const rgbArr = rgbInput.split(',').map(num => parseInt(num.trim()));
        const hex = rgbToHex(rgbArr[0], rgbArr[1], rgbArr[2]);
        document.getElementById('hexCode').value = hex;
        document.getElementById('rgbCode').value = rgbInput;
    }
}

// Function to create the color pallets dynamically
function createColorPalettes() {
    const colors = {
        red: ['#FF0000', '#E60000', '#CC0000', '#B30000', '#990000', '#800000', '#660000', '#4D0000', '#330000', '#1A0000'],
        orange: ['#FFA500', '#FF8C00', '#FF7F00', '#FF6600', '#FF4D00', '#FF3300', '#FF1A00', '#FF0000', '#E60000', '#CC0000'],
        yellow: ['#FFFF00', '#FFD700', '#FFCC00', '#FF9900', '#FF6600', '#FF3300', '#FF1A00', '#FF0000', '#E60000', '#CC0000'],
        green: ['#008000', '#006400', '#004d00', '#003300', '#002200', '#001100', '#000d00', '#000900', '#000600', '#000300'],
        blue: ['#0000FF', '#0000E6', '#0000CC', '#0000B3', '#000099', '#000080', '#000066', '#00004D', '#000033', '#00001A'],
        purple: ['#800080', '#7a007a', '#6a006a', '#5a005a', '#4a004a', '#3a003a', '#2a002a', '#1a001a', '#0a000a', '#000000'],
        teal: ['#008080', '#006666', '#004d4d', '#003333', '#002222', '#001111', '#000d0d', '#000909', '#000404', '#000000'],
        pink: ['#FF007F', '#FF0088', '#FF0099', '#FF00AA', '#FF00BB', '#FF00CC', '#FF00DD', '#FF00EE', '#FF00FF'],
        brown: ['#A52A2A', '#8B0000', '#6B3A2F', '#4B2F1A', '#2F1A09', '#3E1A00', '#5C3A20', '#734C2C'],
        cyan: ['#00FFFF', '#00CCCC', '#00B3B3', '#009999', '#008080', '#006666', '#004D4D', '#003333', '#002222']
    };

    for (const [colorName, colorArray] of Object.entries(colors)) {
        const paletteDiv = document.getElementById(`${colorName}-palette`);
        colorArray.forEach(color => {
            const swatch = document.createElement('div');
            swatch.classList.add('color-swatch');
            swatch.style.backgroundColor = color;
            swatch.title = `${color} (Hex)`;
            swatch.addEventListener('click', () => {
                displayColorInfo(color);
            });
            paletteDiv.appendChild(swatch);
        });
    }
}

// Display color information when swatch is clicked
function displayColorInfo(color) {
    const hexOutput = document.getElementById('selectedHex');
    const rgbOutput = document.getElementById('selectedRgb');

    const rgb = hexToRgb(color);
    hexOutput.value = color;
    rgbOutput.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

// Call function to create palettes on page load
createColorPalettes();
