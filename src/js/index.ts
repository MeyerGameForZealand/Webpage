/* let startElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("knap")
let nyElement: HTMLLinkElement = <HTMLLinkElement>document.getElementById("linkNyt")
let trackElement : HTMLButtonElement = <HTMLButtonElement>document.getElementById("TrackBtn")
nyElement.addEventListener("click", () => {
    let iframeElement: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("imain");
    iframeElement.src = "NytSpil.htm"
})

startElement.addEventListener("click",() => {
    let rundeElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("inputGroupSelectRunder");
    let antalSpillereElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("inputGroupSelectSpillere")
    let alertElement : HTMLDivElement = <HTMLDivElement>document.getElementById("startAlert");
    let iframeElement: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("imain")
    let runde = +rundeElement.value;
    let antal = +antalSpillereElement.value;
    console.log("kartoffel")
    iframeElement.src = "Igang.htm"

})

trackElement.addEventListener("click",() => {
    let iframeElement: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("imain");
    iframeElement.src = "Regler.htm";
    console.log("Fuck dig lorte ting")
})
 */

