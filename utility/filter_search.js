function fil(data) {
    var lines = data.split('\n');
    for(var line = 0; line < lines.length; line++){
        if(lines[line]==='{') break 
    }
    for(var line2 = 0; line2 < line; line2++) lines.splice(0,1);
    return lines.join('\n');
}

output.fil = fil(file)