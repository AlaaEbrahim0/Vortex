module.exports = {
    content: [
        "./Views/**/*.{cshtml,html}",
        // Fixed typo: removed extra period'./wwwroot/**/*.{js,css}',
        "./wwwroot/**/.(css,js)",
    ],
    theme: {
        extend: {
            fontFamily: {
                bebas: ["Bebas Neue", "sans-serif"],
                barlow: ["Barlow Condensed", "sans-serif"],
                playfair: ["Playfair Display", "serif"],
                newamsterdam: ["New Amsterdam", "sans-serif"],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                vortextMain: {
                    primary: "#6d28d9",
                    accent: "#9ca3af",
                    success: "#2ed89f",
                    error: "#e83030",
                },
            },
        ],
    },
};
