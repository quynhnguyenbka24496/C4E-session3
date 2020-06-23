
setshape("rocket-large")
const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
let   a=0;
for (i=0; i<colors.length; i++) {
    color(colors[i])
    for (j=0; j<4; j++) {
        fd(a);
        rt(90);
    }
    a+=25;
}