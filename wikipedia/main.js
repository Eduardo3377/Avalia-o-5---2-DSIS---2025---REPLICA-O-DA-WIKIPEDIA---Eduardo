
const root = document.documentElement;
const styles = getComputedStyle(root);
colortheme = 1
document.getElementById("Theme").addEventListener("click", Theme);
function Theme() {
    if (colortheme == 0){
        //escuro         
        root.style.setProperty('--texto', styles.getPropertyValue('--azulcaro').trim());
        root.style.setProperty('--titulo', styles.getPropertyValue('--azulmedio').trim());
        root.style.setProperty('--acento', styles.getPropertyValue('--azulescuro').trim());
        root.style.setProperty('--fundo1', styles.getPropertyValue('--beige').trim());
        root.style.setProperty('--fundo2', styles.getPropertyValue('--beigeclaro').trim());
        root.style.setProperty('--fundo3', styles.getPropertyValue('--amarelo').trim());
        colortheme = 1
    }else{
        //claro
        root.style.setProperty('--texto', styles.getPropertyValue('--beige').trim());
        root.style.setProperty('--titulo', styles.getPropertyValue('--beigeclaro').trim());
        root.style.setProperty('--acento', styles.getPropertyValue('--amarelo').trim());
        root.style.setProperty('--fundo1', styles.getPropertyValue('--azulescuro').trim());
        root.style.setProperty('--fundo2', styles.getPropertyValue('--azulmedio').trim());
        root.style.setProperty('--fundo3', styles.getPropertyValue('--azulcaro').trim());
        colortheme = 0
    }    
}
