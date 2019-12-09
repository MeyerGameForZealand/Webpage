let nytElement: HTMLLinkElement = <HTMLLinkElement>document.getElementById("linkNyt")
let reglElement: HTMLLinkElement = <HTMLLinkElement>document.getElementById("linkRegler")
let spilElement: HTMLLinkElement = <HTMLLinkElement>document.getElementById("linkSpiller")

nytElement.addEventListener("click", () => {
    let iframeelement: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("imain")
    iframeelement.src = "Assets/NytSpil.htm"
})

reglElement.addEventListener("click", () => {
    let iframeelement: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("imain")
    iframeelement.src = "Assets/Regler.htm"
})

spilElement.addEventListener("click", () => {
    let iframeelement: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("imain")
    iframeelement.src = "Assets/Spillere.htm"
})