function spinalCase(str) {
    str = str.toLowerCase().replace(/ /g, "-")
    return str;
}

spinalCase("This Is Spinal Tap");
